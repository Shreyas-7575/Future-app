import React from 'react';

const SelectionPage = ({ userName, onSelect }) => {
  return (
    <div className="animate-fade-in" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '10px' }}>Hello, <span style={{ color: 'var(--primary-color)' }}>{userName}</span></h1>
      <h2 style={{ marginBottom: '50px', fontWeight: '400', opacity: 0.8 }}>What is your current status?</h2>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="glass" style={{
          padding: '40px',
          width: '250px',
          height: '250px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px'
        }}
        onClick={() => onSelect('10th')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.borderColor = 'var(--primary-color)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'var(--glass-border)';
        }}
        >
          <div style={{ fontSize: '3rem' }}>🎓</div>
          After Class 10th
        </button>

        <button className="glass" style={{
          padding: '40px',
          width: '250px',
          height: '250px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px'
        }}
        onClick={() => onSelect('12th')}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.borderColor = 'var(--accent-color)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'var(--glass-border)';
        }}
        >
          <div style={{ fontSize: '3rem' }}>📜</div>
          After Class 12th
        </button>
      </div>
      
      <p style={{ marginTop: '50px', opacity: 0.6, maxWidth: '500px' }}>
        Select your current education level to see the best career paths and future opportunities tailored for you.
      </p>
    </div>
  );
};

export default SelectionPage;
