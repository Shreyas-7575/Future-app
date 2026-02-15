import React from 'react';

const StreamSelectionPage = ({ onSelectStream }) => {
  const streams = [
    { id: 'Science', icon: '🔬', desc: 'Engineering, Medical, Research' },
    { id: 'Commerce', icon: '📈', desc: 'Business, Finance, Economics' },
    { id: 'Arts', icon: '🎨', desc: 'Humanities, Law, Design' }
  ];

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '15px' }}>Explore Your Future</h1>
      <p style={{ marginBottom: '50px', opacity: 0.7 }}>Select a stream to watch detailled videos & learn more.</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1000px'
      }}>
        {streams.map((stream) => (
          <button
            key={stream.id}
            className="glass"
            onClick={() => onSelectStream(stream.id)}
            style={{
              width: '280px',
              padding: '40px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              transition: 'transform 0.3s, border-color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--primary-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{stream.icon}</div>
            <h2 style={{ fontSize: '2rem' }}>{stream.id}</h2>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{stream.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StreamSelectionPage;
