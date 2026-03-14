import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, ArrowLeft, Plus, X } from 'lucide-react';

const AIChatPage = ({ onBack, userName }) => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: `Hello ${userName}! I'm your AI career assistant. How can I help you explore your future today?`, 
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
          dataUrl: reader.result,
          mimeType: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      imageUrl: selectedImage?.dataUrl,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    
    const attachedImage = selectedImage;
    
    setInput('');
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
         throw new Error("Missing VITE_GEMINI_API_KEY in environment variables.");
      }

      // Convert message history to Gemini format (excluding the initial greeting to save tokens)
      const historyContents = messages.slice(1).map(m => {
        const parts = [];
        if (m.imageUrl) {
          const base64Data = m.imageUrl.split(',')[1];
          const match = m.imageUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
          if (match) {
            parts.push({
              inlineData: { data: base64Data, mimeType: match[1] }
            });
          }
        }
        if (m.text) parts.push({ text: m.text });
        return {
          role: m.sender === 'user' ? 'user' : 'model',
          parts: parts.length > 0 ? parts : [{ text: ' ' }]
        };
      });

      const currentParts = [];
      if (attachedImage) {
        const base64Data = attachedImage.dataUrl.split(',')[1];
        const match = attachedImage.dataUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
        if (match) {
          currentParts.push({
            inlineData: { data: base64Data, mimeType: match[1] }
          });
        }
      }
      if (input.trim()) {
        currentParts.push({ text: input });
      }
      if (currentParts.length === 0) currentParts.push({ text: ' ' });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: `You are a friendly and expert career counselor for students. The user's name is ${userName}. Provide helpful, encouraging, and concise advice about career paths, streams, colleges, and skills. IMPORTANT: Always format your answers in a very neat, clean, and well-structured way. Use a step-by-step format, bullet points, and clear paragraphs to make it easy to read.` }]
          },
          contents: [
            ...historyContents,
            { role: "user", parts: currentParts }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that response.";

      const aiResponse = {
        id: Date.now() + 1,
        text: aiText,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error("AI Chat Error:", error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please ensure your VITE_GEMINI_API_KEY is set correctly in the project's .env file.",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      height: 'calc(100vh - 40px)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px', 
        marginBottom: '20px' 
      }}>
        <button className="btn-secondary" onClick={onBack} style={{ padding: '10px' }}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, white, var(--primary-color))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            AI Career Assistant
          </h1>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.6 }}>Always here to help</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="glass" style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '20px',
        borderRadius: '24px'
      }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '100%'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
              alignItems: 'flex-end',
              maxWidth: '85%'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: msg.sender === 'user' ? 'var(--secondary-color)' : 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div style={{
                padding: '12px 16px',
                borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                background: msg.sender === 'user' 
                  ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' 
                  : 'rgba(255,255,255,0.08)',
                border: msg.sender === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '0.95rem',
                lineHeight: '1.4',
                whiteSpace: 'pre-wrap'
              }}>
                {msg.imageUrl && (
                  <img 
                    src={msg.imageUrl} 
                    alt="Upload" 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '200px', 
                      borderRadius: '12px', 
                      marginBottom: msg.text ? '8px' : '0',
                      display: 'block' 
                    }} 
                  />
                )}
                {msg.text}
              </div>
            </div>
            <span style={{ 
              fontSize: '0.7rem', 
              opacity: 0.4, 
              marginTop: '4px',
              marginRight: msg.sender === 'user' ? '42px' : '0',
              marginLeft: msg.sender === 'ai' ? '42px' : '0'
            }}>
              {msg.timestamp}
            </span>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.5, marginLeft: '42px' }}>
            <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out' }}></div>
            <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out 0.2s' }}></div>
            <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s infinite ease-in-out 0.4s' }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {selectedImage && (
          <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', alignSelf: 'flex-start' }}>
            <img src={selectedImage.dataUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             <button 
               onClick={removeSelectedImage} 
               style={{ 
                 position: 'absolute', top: '4px', right: '4px', 
                 background: 'rgba(0,0,0,0.6)', borderRadius: '50%', color: 'white', 
                 border: 'none', padding: '4px', cursor: 'pointer', 
                 display: 'flex', alignItems: 'center', justifyContent: 'center' 
               }}
             >
               <X size={14} />
             </button>
          </div>
        )}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleImageSelect} 
            style={{ display: 'none' }} 
          />
          <button 
            className="glass"
            onClick={() => fileInputRef.current?.click()}
            style={{ 
              width: '54px', height: '54px', borderRadius: '50%', 
              padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: 'white'
            }}
            title="Attach a photo"
          >
             <Plus size={24} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="glass"
          style={{
            flex: 1,
            padding: '15px 20px',
            borderRadius: '99px',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'white',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <button 
          className="btn-ai" 
          onClick={handleSend}
          style={{ width: '54px', height: '54px', borderRadius: '50%', padding: 0, justifyContent: 'center', flexShrink: 0 }}
        >
          <Send size={20} />
        </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
};

export default AIChatPage;
