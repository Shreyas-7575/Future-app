import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Which type of problems do you enjoy the most?",
    options: [
      { text: "Mathematical and numerical problems", type: "Science" },
      { text: "Business and money-related situations", type: "Commerce" },
      { text: "Social and theoretical discussions", type: "Arts" },
      { text: "Biology and health-related topics", type: "Science" }
    ]
  },
  {
    id: 2,
    question: "In your free time, you are more likely to:",
    options: [
      { text: "Solve puzzles or logic games", type: "Science" },
      { text: "Watch finance or startup videos", type: "Commerce" },
      { text: "Read about society or psychology", type: "Arts" },
      { text: "Watch science or medical content", type: "Science" }
    ]
  },
  {
    id: 3,
    question: "Which subject do you naturally score highest in?",
    options: [
      { text: "Mathematics", type: "Science" },
      { text: "Economics or Business Studies", type: "Commerce" },
      { text: "Social Studies", type: "Arts" },
      { text: "Biology", type: "Science" }
    ]
  },
  {
    id: 4,
    question: "You are more interested in:",
    options: [
      { text: "Machines and technology", type: "Science" },
      { text: "Markets and investments", type: "Commerce" },
      { text: "Law and public policies", type: "Arts" },
      { text: "Human body and medicine", type: "Science" }
    ]
  },
  {
    id: 5,
    question: "You prefer learning through:",
    options: [
      { text: "Practice problems", type: "Science" },
      { text: "Case studies", type: "Commerce" },
      { text: "Reading and discussions", type: "Arts" },
      { text: "Experiments", type: "Science" }
    ]
  },
  {
    id: 6,
    question: "People describe you as:",
    options: [
      { text: "Logical", type: "Science" },
      { text: "Strategic", type: "Commerce" },
      { text: "Expressive", type: "Arts" },
      { text: "Curious", type: "Science" }
    ]
  },
  {
    id: 7,
    question: "When solving a challenge, you first:",
    options: [
      { text: "Break it into logical steps", type: "Science" },
      { text: "Think about profit and loss", type: "Commerce" },
      { text: "Discuss with others", type: "Arts" },
      { text: "Research scientifically", type: "Science" }
    ]
  },
  {
    id: 8,
    question: "You are comfortable working with:",
    options: [
      { text: "Numbers", type: "Science" },
      { text: "Financial planning", type: "Commerce" },
      { text: "Words and writing", type: "Arts" },
      { text: "Scientific data", type: "Science" }
    ]
  },
  {
    id: 9,
    question: "Your biggest strength is:",
    options: [
      { text: "Analytical reasoning", type: "Science" },
      { text: "Business understanding", type: "Commerce" },
      { text: "Communication", type: "Arts" },
      { text: "Observation", type: "Science" }
    ]
  },
  {
    id: 10,
    question: "Which environment suits you most?",
    options: [
      { text: "Technical and structured", type: "Science" },
      { text: "Competitive and growth-driven", type: "Commerce" },
      { text: "Open and discussion-based", type: "Arts" },
      { text: "Research-oriented", type: "Science" }
    ]
  },
  {
    id: 11,
    question: "You are motivated mainly by:",
    options: [
      { text: "Solving complex problems", type: "Science" },
      { text: "Building wealth", type: "Commerce" },
      { text: "Making social impact", type: "Arts" },
      { text: "Improving health or life quality", type: "Science" }
    ]
  },
  {
    id: 12,
    question: "You would enjoy a career in:",
    options: [
      { text: "Engineering or Technology", type: "Science" },
      { text: "Entrepreneurship or Finance", type: "Commerce" },
      { text: "Civil Services or Law", type: "Arts" },
      { text: "Medicine or Research", type: "Science" }
    ]
  },
  {
    id: 13,
    question: "Your decision-making style is:",
    options: [
      { text: "Logical and data-based", type: "Science" },
      { text: "Risk-taking and opportunity-focused", type: "Commerce" },
      { text: "Opinion-based and discussion-driven", type: "Arts" },
      { text: "Evidence and research-based", type: "Science" }
    ]
  },
  {
    id: 14,
    question: "You prefer work that is:",
    options: [
      { text: "Structured and systematic", type: "Science" },
      { text: "Growth-oriented and ambitious", type: "Commerce" },
      { text: "People-centered", type: "Arts" },
      { text: "Detail-focused and experimental", type: "Science" }
    ]
  },
  {
    id: 15,
    question: "You enjoy subjects that are:",
    options: [
      { text: "Objective and calculation-based", type: "Science" },
      { text: "Market and economy-based", type: "Commerce" },
      { text: "Theory and analysis-based", type: "Arts" },
      { text: "Conceptual and practical", type: "Science" }
    ]
  },
  // Placeholders for 16-20
  {
    id: 16,
    question: "When reading news, you look for:",
    options: [
      { text: "Tech trends and discoveries", type: "Science" },
      { text: "Stock market and business news", type: "Commerce" },
      { text: "Politics and social issues", type: "Arts" },
      { text: "Health and environment reports", type: "Science" }
    ]
  },
  {
    id: 17,
    question: "You are good at remembering:",
    options: [
      { text: "Formulas and logic", type: "Science" },
      { text: "Prices and value", type: "Commerce" },
      { text: "Dates and stories", type: "Arts" },
      { text: "Diagrams and processes", type: "Science" }
    ]
  },
  {
    id: 18,
    question: "A project you would love to lead:",
    options: [
      { text: "Building a robot or app", type: "Science" },
      { text: "Starting a small business", type: "Commerce" },
      { text: "Organizing a debate or play", type: "Arts" },
      { text: "Conducting a science experiment", type: "Science" }
    ]
  },
  {
    id: 19,
    question: "You value:",
    options: [
      { text: "Precision and accuracy", type: "Science" },
      { text: "Profitability and efficiency", type: "Commerce" },
      { text: "Creativity and expression", type: "Arts" },
      { text: "Discovery and welfare", type: "Science" }
    ]
  },
  {
    id: 20,
    question: "Your friends mainly ask you for help with:",
    options: [
      { text: "Math or computer problems", type: "Science" },
      { text: "Managing money or sales", type: "Commerce" },
      { text: "Writing or history", type: "Arts" },
      { text: "Biology or health tips", type: "Science" }
    ]
  },
  {
    id: 21,
    question: "Your ideal work setup includes:",
    options: [
      { text: "Technology company", type: "Science" },
      { text: "Corporate or own business", type: "Commerce" },
      { text: "Government or academic field", type: "Arts" },
      { text: "Hospital or laboratory", type: "Science" }
    ]
  },
  {
    id: 22,
    question: "You enjoy analysing:",
    options: [
      { text: "Logical patterns", type: "Science" },
      { text: "Profit-loss statements", type: "Commerce" },
      { text: "Social structures", type: "Arts" },
      { text: "Scientific findings", type: "Science" }
    ]
  },
  {
    id: 23,
    question: "You feel confident handling:",
    options: [
      { text: "Advanced mathematics", type: "Science" },
      { text: "Financial strategies", type: "Commerce" },
      { text: "Long theory-based subjects", type: "Arts" },
      { text: "Lab-based practical work", type: "Science" }
    ]
  },
  {
    id: 24,
    question: "Your long-term priority is:",
    options: [
      { text: "Innovation and technical expertise", type: "Science" },
      { text: "Financial independence", type: "Commerce" },
      { text: "Social recognition and impact", type: "Arts" },
      { text: "Saving or improving lives", type: "Science" }
    ]
  },
  {
    id: 25,
    question: "If money was not a concern, you would choose:",
    options: [
      { text: "Engineering or Technology", type: "Science" },
      { text: "Business and Investment", type: "Commerce" },
      { text: "Humanities and Social Sciences", type: "Arts" },
      { text: "Medical or Scientific Research", type: "Science" }
    ]
  }
];

import { ArrowLeft } from 'lucide-react';

const QuizPage = ({ onComplete, onBack }) => {
  const [answers, setAnswers] = useState({});

  const handleOptionSelect = (questionId, optionType) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionType
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const scores = { Science: 0, Commerce: 0, Arts: 0 };
    Object.values(answers).forEach(type => {
      if (scores[type] !== undefined) {
        scores[type]++;
      }
    });

    onComplete(scores);
  };

  return (
    <div className="animate-fade-in" style={{
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      paddingBottom: '100px'
    }}>
      <div style={{ position: 'relative', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button 
          onClick={onBack}
          className="btn-secondary"
          style={{
            position: 'absolute',
            left: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 20px',
            fontSize: '1.1rem'
          }}
        >
          <ArrowLeft size={28} /> Back
        </button>

        <h1 style={{ 
          background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          margin: 0
        }}>
          Discover Your Path
        </h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {questions.map((q, index) => (
          <div key={q.id} className="glass" style={{ padding: '25px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
              <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>{index + 1}.</span>
              {q.question}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionSelect(q.id, opt.type)}
                  style={{
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: answers[q.id] === opt.type ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)',
                    background: answers[q.id] === opt.type ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.05)',
                    color: 'var(--text-color)',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: answers[q.id] === opt.type ? 'var(--primary-color)' : 'rgba(255,255,255,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {answers[q.id] === opt.type && (
                      <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--primary-color)'
                      }} />
                    )}
                  </div>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button 
          className="btn-primary" 
          onClick={handleSubmit}
          style={{ padding: '15px 60px', fontSize: '1.2rem' }}
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
