import React from 'react';

const careers = {
  Science: [
    { id: 'eng', title: 'Engineering', icon: '⚙️' },
    { id: 'med', title: 'Medical (MBBS/BDS)', icon: '🩺' },
    { id: 'biotech', title: 'Biotechnology', icon: '🧬' },
    { id: 'astro', title: 'Astronomy & Space', icon: '🔭' },
    { id: 'forensic', title: 'Forensic Science', icon: '🔍' }
  ],
  Commerce: [
    { id: 'ca', title: 'Chartered Accountancy', icon: '📊' },
    { id: 'inv', title: 'Investment Banking', icon: '💰' },
    { id: 'mkt', title: 'Marketing & Sales', icon: '📢' },
    { id: 'ent', title: 'Entrepreneurship', icon: '🚀' },
    { id: 'eco', title: 'Economics', icon: '📉' },
    { id: 'drop', title: 'Dropshipping', icon: '📦' },
    { id: 'cs', title: 'Company Secretary', icon: '📑' }
  ],
  Arts: [
    { id: 'law', title: 'Law & Judiciary', icon: '⚖️' },
    { id: 'journ', title: 'Journalism & Media', icon: '🎙️' },
    { id: 'psych', title: 'Psychology', icon: '🧠' },
    { id: 'design', title: 'Fashion & Product Design', icon: '👗' },
    { id: 'civil', title: 'Civil Services (IAS/IPS)', icon: '🏛️' }
  ]
};

const CareerOptionsPage = ({ stream, onSelectCareer, onBack }) => {
  const options = careers[stream] || [];

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      minHeight: '100vh',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{ width: '100%', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
        <button className="btn-secondary" onClick={onBack}>← Back</button>
        <h1 style={{ flex: 1, textAlign: 'center', marginRight: '80px' }}>
          <span style={{ color: 'var(--primary-color)' }}>{stream}</span> Career Options
        </h1>
      </div>

      <p style={{ marginBottom: '40px', opacity: 0.7, textAlign: 'center' }}>
        Select a specific field to watch videos and learn more about it.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        width: '100%'
      }}>
        {options.map((career) => (
          <button
            key={career.id}
            className="glass"
            onClick={() => onSelectCareer(career.title)}
            style={{
              padding: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'left',
              transition: 'transform 0.2s, background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'var(--glass-bg)';
            }}
          >
            <div style={{ fontSize: '2.5rem' }}>{career.icon}</div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{career.title}</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Click to view details</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerOptionsPage;
