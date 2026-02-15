import React from 'react';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--primary-color)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'var(--accent-color)',
        filter: 'blur(150px)',
        opacity: 0.2,
        borderRadius: '50%',
        zIndex: -1
      }} />

      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: '800',
        marginBottom: '1.5rem',
        lineHeight: '1.2',
        background: 'linear-gradient(to right, #fff, #94a3b8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        maxWidth: '800px'
      }}>
        Welcome To Decide Your Future Plan
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#94a3b8',
        marginBottom: '3rem',
        maxWidth: '600px'
      }}>
        Discover the perfect career path tailored to your skills and aspirations. 
        Take the first step towards a brighter future today.
      </p>

      <button 
        className="btn-primary" 
        onClick={onStart}
        style={{
          padding: '16px 48px',
          fontSize: '1.2rem',
          letterSpacing: '1px'
        }}
      >
        START JOURNEY
      </button>
    </div>
  );
};

export default WelcomePage;
