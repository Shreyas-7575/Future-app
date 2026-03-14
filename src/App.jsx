import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import SelectionPage from './components/SelectionPage';
import BottomNav from './components/BottomNav';
import LoginModal from './components/LoginModal';
import InfoModal from './components/InfoModal';
import StreamSelectionPage from './components/StreamSelectionPage';
import CareerOptionsPage from './components/CareerOptionsPage';
import CareerDetailPage from './components/CareerDetailPage';
import MCQPage from './components/MCQPage';
import AIChatPage from './components/AIChatPage';
import { User, Mail, Award, Code, Rocket, Star, Heart } from 'lucide-react';

function App() {
  const [view, setView] = useState('welcome'); // welcome, login, selection, stream-selection, career-options, class12-stream-selection, class12-career-options, mcq, ai-chat
  const [user, setUser] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [previousCareerView, setPreviousCareerView] = useState('career-options');
  const [chatReturnView, setChatReturnView] = useState(null);

  const handleStart = () => {
    if (user) {
      setView('selection');
    } else {
      setView('login');
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setView('selection');
  };

  const handleClassSelection = (grade) => {
    if (grade === '10th') {
      setView('mcq');
    } else {
      setView('class12-stream-selection');
    }
  };

  const handleMCQComplete = (recommendedStream) => {
    // We could auto-select the stream here, but for now we just go to selection
    setView('stream-selection');
  };

  const handleClass12StreamSelect = (streamId) => {
    setSelectedStream(streamId);
    setView('class12-career-options');
  };

  const handleStreamSelect = (streamId) => {
    setSelectedStream(streamId);
    setView('career-options');
  };

  const handleCareerSelect = (career, fromView) => {
    setSelectedCareer(career);
    setPreviousCareerView(fromView || 'career-options');
    setView('career-detail');
  };

  const handleChatWithAI = () => {
    setChatReturnView(view);
    setView('ai-chat');
  };

  const handleBackToStreams = () => {
    setView('stream-selection');
  };

  const handleNavigate = (targetView) => {
    let finalView = targetView;
    if (targetView === 'home') {
      finalView = user ? 'selection' : 'welcome';
    }

    // Reset flow if going home (second page)
    if (finalView === 'welcome' || finalView === 'selection') {
      setSelectedStream(null);
    }
    setView(finalView);
  };

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Modal Content Logic (same as before)
  const getModalContent = () => {
    switch (activeModal) {
      case 'profile':
        return {
          title: 'User Profile',
          content: user ? (
            <div className="profile-container">
              <div className="profile-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-info">
                <div className="info-item">
                  <User className="info-icon" size={20} />
                  <div>
                    <label style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Full Name</label>
                    <span style={{ fontWeight: '500' }}>{user.name}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" size={20} />
                  <div>
                    <label style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Email Address</label>
                    <span style={{ fontWeight: '500' }}>{user.email}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Award className="info-icon" size={20} />
                  <div>
                    <label style={{ fontSize: '0.8rem', opacity: 0.6, display: 'block' }}>Status</label>
                    <span style={{ fontWeight: '500' }}>Aspiring Student</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <User size={48} style={{ opacity: 0.2, marginBottom: '15px' }} />
              <p>Please login to view your profile details.</p>
            </div>
          )
        };
      case 'made-by':
        return {
          title: 'Made By',
          content: (
            <div className="credits-container">
              <div className="credit-card">
                <div className="credit-icon">
                  <Code size={24} />
                </div>
                <div className="credit-info">
                  <div className="credit-name">Shreyas Patel</div>
                  <div className="credit-role">Lead Developer</div>
                </div>
              </div>

              <div className="credit-card">
                <div className="credit-icon">
                  <Rocket size={24} />
                </div>
                <div className="credit-info">
                  <div className="credit-name">Dhyan Patel</div>
                  <div className="credit-role">Founder</div>
                </div>
              </div>

              <div className="credit-card">
                <div className="credit-icon" style={{ color: 'var(--accent-color)' }}>
                  <Star size={24} />
                </div>
                <div className="credit-info">
                  <div className="credit-name">Dhruv Panchal</div>
                  <div className="credit-role">Co-Founder</div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px', opacity: 0.5, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                Made with <Heart size={12} fill="currentColor" /> for the Future
              </div>
            </div>
          )
        };
      case 'help':
        return {
          title: 'How to Use',
          content: (
            <div className="help-steps">
              <div className="help-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <div className="step-title">Start Your Journey</div>
                  <div className="step-desc">Click Start and log in to save your preferences and unlock all features.</div>
                </div>
              </div>
              <div className="help-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">Choose Your Path</div>
                  <div className="step-desc">Select "After 10th" or "After 12th" depending on your current education level.</div>
                </div>
              </div>
              <div className="help-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">Explore Streams</div>
                  <div className="step-desc">Pick from Science, Commerce, or Arts to see specific career opportunities.</div>
                </div>
              </div>
              <div className="help-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <div className="step-title">Detailed Insights</div>
                  <div className="step-desc">Read pros, cons, and salary information. Use AI Chat for deeper questions!</div>
                </div>
              </div>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const modalData = getModalContent();

  return (
    <div className="app-container">
      {view === 'welcome' && <WelcomePage onStart={handleStart} />}
      
      {view === 'login' && (
        <>
          <WelcomePage onStart={() => {}} />
          <LoginModal onLogin={handleLogin} />
        </>
      )}

      {view === 'selection' && (
        <SelectionPage 
          userName={user?.name || 'Student'} 
          onSelect={handleClassSelection} 
        />
      )}

      {view === 'stream-selection' && (
        <StreamSelectionPage onSelectStream={handleStreamSelect} onBack={() => setView('selection')} />
      )}

      {view === 'mcq' && (
        <MCQPage onComplete={handleMCQComplete} onBack={() => setView('selection')} />
      )}

      {view === 'career-options' && selectedStream && (
        <CareerOptionsPage 
          stream={selectedStream} 
          onSelectCareer={(career) => handleCareerSelect(career, 'career-options')}
          onBack={handleBackToStreams}
        />
      )}

      {view === 'class12-stream-selection' && (
        <StreamSelectionPage onSelectStream={handleClass12StreamSelect} onBack={() => setView('selection')} />
      )}

      {view === 'class12-career-options' && selectedStream && (
        <CareerOptionsPage 
          stream={selectedStream} 
          onSelectCareer={(career) => handleCareerSelect(career, 'class12-career-options')}
          onBack={() => setView('class12-stream-selection')}
        />
      )}

      {view === 'career-detail' && selectedCareer && (
        <CareerDetailPage 
          career={selectedCareer} 
          onBack={() => setView(previousCareerView)} 
          showColleges={previousCareerView === 'class12-career-options'}
          onChatWithAI={handleChatWithAI}
        />
      )}

      {view === 'ai-chat' && (
        <AIChatPage 
          onBack={() => setView(chatReturnView || 'selection')} 
          userName={user?.name || 'Student'} 
        />
      )}

      {view !== 'career-detail' && (
        <BottomNav onNavigate={handleNavigate} onOpenModal={handleOpenModal} />
      )}

      {activeModal && (
        <InfoModal 
          title={modalData.title} 
          content={modalData.content} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
