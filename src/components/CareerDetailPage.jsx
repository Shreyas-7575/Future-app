import React, { useEffect } from 'react';

const CareerDetailPage = ({ career, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!career) return null;

  return (
    <div className="animate-fade-in" style={{
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* Header Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <button className="btn-secondary" onClick={onBack}>← Back</button>
        <div style={{ fontSize: '3rem' }}>{career.icon}</div>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, white, var(--primary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {career.title}
        </h1>
      </div>

      <div style={{ display: 'grid', gap: '30px' }}>
        {/* Overview Card */}
        <section className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📝</span> Overview
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem', opacity: 0.9 }}>
            {career.overview}
          </p>
        </section>

        {/* Path Section */}
        <section className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🛤️</span> Step-by-Step Path
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {career.steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, paddingTop: '4px', opacity: 0.85 }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Skills Card */}
          <section className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⚡</span> Important Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {career.skills.map((skill, index) => (
                <span key={index} style={{
                  padding: '6px 14px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  opacity: 0.8
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Exams Card */}
          <section className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📚</span> Key Entrance Exams
            </h2>
            <ul style={{ paddingLeft: '20px', margin: 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {career.entranceExams.map((exam, index) => (
                <li key={index}>{exam}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Colleges & Salary Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
           <section className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🏛️</span> Top Institutions
            </h2>
            <ul style={{ paddingLeft: '20px', margin: 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {career.colleges.map((college, index) => (
                <li key={index}>{college}</li>
              ))}
            </ul>
          </section>

          <section className="glass" style={{ padding: '30px', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.3rem' }}>
              💰 Average Starting Salary
            </h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              {career.salary}
            </p>
            <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '5px' }}>*Based on industry standards</p>
          </section>
        </div>
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <button className="btn-primary" onClick={onBack} style={{ padding: '15px 40px' }}>
           Explore Other Careers
        </button>
      </div>
    </div>
  );
};

export default CareerDetailPage;
