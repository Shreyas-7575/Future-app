import React from 'react';

const CareerDetailPage = ({ career, onBack }) => {
  if (!career) return null;

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 20px',
      minHeight: '100vh',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ width: '100%', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
        <button className="btn-secondary" onClick={onBack}>← Back</button>
        <div style={{ flex: 1, textAlign: 'center', marginRight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <span style={{ fontSize: '2.5rem' }}>{career.icon}</span>
          <h1 style={{ margin: 0 }}>{career.title}</h1>
        </div>
      </div>

      <div className="glass" style={{ padding: '30px', marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>About this Career</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>
          {career.description}
        </p>
      </div>

      <div className="glass" style={{ padding: '30px' }}>
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '25px' }}>Step-by-Step Guide</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {career.steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontWeight: 'bold',
                boxShadow: '0 0 15px var(--primary-color)'
              }}>
                {index + 1}
              </div>
              <div style={{ 
                padding: '15px 20px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                flex: 1,
                fontSize: '1.05rem',
                lineHeight: '1.5'
              }}>
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '50px', paddingBottom: '100px' }}>
        <p style={{ opacity: 0.5, marginBottom: '20px' }}>Ready to explore more or get started?</p>
        <button className="btn-primary" onClick={onBack}>Explore Other Careers</button>
      </div>
    </div>
  );
};

export default CareerDetailPage;
