import React from 'react';

const CareerDetailPage = ({ career, onBack }) => {
  if (!career) return null;

  const Section = ({ title, children, iconColor = 'var(--primary-color)' }) => (
    <div className="glass" style={{ padding: '25px', marginBottom: '25px' }}>
      <h2 style={{ 
        color: iconColor, 
        marginBottom: '20px', 
        fontSize: '1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 20px',
      minHeight: '100vh',
      maxWidth: '900px',
      margin: '0 auto',
      paddingBottom: '100px'
    }}>
      {/* Header */}
      <div style={{ width: '100%', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
        <button className="btn-secondary" onClick={onBack}>← Back</button>
        <div style={{ 
          flex: 1, 
          textAlign: 'center', 
          marginRight: '80px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '15px' 
        }}>
          <span style={{ fontSize: '3rem' }}>{career.icon}</span>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{career.title}</h1>
        </div>
      </div>

      {/* Overview Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <p style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '5px' }}>Est. Salary</p>
          <h3 style={{ borderBottom: '2px solid var(--primary-color)', display: 'inline-block' }}>{career.salaryRange}</h3>
        </div>
        <div className="glass" style={{ padding: '20px', textAlign: 'center' }}>
          <p style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '5px' }}>Duration</p>
          <h3 style={{ borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>{career.duration}</h3>
        </div>
      </div>

      <Section title="About this Career">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9 }}>
          {career.description}
        </p>
      </Section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', marginBottom: '25px' }}>
        <Section title="Required Skills" iconColor="var(--accent-color)">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {career.keySkills.map((skill, i) => (
              <span key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '8px 15px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.9rem'
              }}>{skill}</span>
            ))}
          </div>
        </Section>

        <Section title="Top Specializations" iconColor="#fbbf24">
          <ul style={{ paddingLeft: '20px', opacity: 0.8, lineHeight: '1.8' }}>
            {career.topSpecializations.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Step-by-Step Guide">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {career.steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pros and Cons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
        <div className="glass" style={{ padding: '25px', borderLeft: '4px solid #22c55e' }}>
          <h3 style={{ color: '#22c55e', marginBottom: '15px' }}>Pros</h3>
          <ul style={{ paddingLeft: '20px', opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {career.prosCons.pros.map((pro, i) => <li key={i}>{pro}</li>)}
          </ul>
        </div>
        <div className="glass" style={{ padding: '25px', borderLeft: '4px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>Cons</h3>
          <ul style={{ paddingLeft: '20px', opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {career.prosCons.cons.map((con, i) => <li key={i}>{con}</li>)}
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <button className="btn-primary" onClick={onBack} style={{ padding: '15px 50px' }}>Explore More Careers</button>
      </div>
    </div>
  );
};

export default CareerDetailPage;
