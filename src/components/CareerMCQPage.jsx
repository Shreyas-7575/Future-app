import React, { useState } from 'react';
import { mcqData10th } from '../data/mcqData';

const CareerMCQPage = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});

  const handleOptionSelect = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const isAllAnswered = Object.keys(answers).length === mcqData10th.length;

  const handleSubmit = () => {
    if (isAllAnswered) {
      onComplete(answers);
    }
  };

  return (
    <div className="animate-fade-in" style={{ 
      padding: '40px 20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      paddingBottom: '100px' 
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Discover Your Path</h1>
      <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '40px' }}>
        Answer these questions to help us understand what you enjoy doing!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {mcqData10th.map((q, index) => (
          <div key={q.id} className="glass" style={{ padding: '25px', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
              <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>{index + 1}.</span>
              {q.question}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {q.options.map(opt => {
                const isSelected = answers[q.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(q.id, opt.id)}
                    style={{
                      padding: '15px 20px',
                      borderRadius: '10px',
                      border: `1px solid ${isSelected ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)'}`,
                      backgroundColor: isSelected ? 'rgba(74, 144, 226, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-color)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                  >
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.1)',
                      color: isSelected ? '#fff' : 'inherit',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      {opt.id}
                    </span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <button 
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!isAllAnswered}
          style={{ 
            padding: '15px 40px',
            fontSize: '1.2rem',
            opacity: isAllAnswered ? 1 : 0.5,
            cursor: isAllAnswered ? 'pointer' : 'not-allowed'
          }}
        >
          {isAllAnswered ? 'See My Recommendations' : `Answer Expected (${Object.keys(answers).length}/${mcqData10th.length})`}
        </button>
      </div>
    </div>
  );
};

export default CareerMCQPage;
