import React, { useState } from 'react';
import { mcqData10th } from '../data/mcqData';

const MCQPage = ({ onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionId) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestionIndex < mcqData10th.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(ans => counts[ans]++);

    // Scoring logic:
    // A/B -> Science
    // C -> Arts
    // D -> Commerce
    const scienceScore = counts.A + counts.B;
    const artsScore = counts.C;
    const commerceScore = counts.D;

    if (scienceScore >= artsScore && scienceScore >= commerceScore) return 'Science';
    if (commerceScore >= artsScore) return 'Commerce';
    return 'Arts';
  };

  const getScores = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(ans => counts[ans]++);
    const total = answers.length;
    const scienceRaw = counts.A + counts.B;
    const artsRaw = counts.C;
    const commerceRaw = counts.D;

    if (total === 0) return { Science: 34, Commerce: 33, Arts: 33 };

    const science = Math.round((scienceRaw / total) * 100);
    const arts = Math.round((artsRaw / total) * 100);
    const commerce = 100 - science - arts;

    return { Science: science, Commerce: commerce, Arts: arts };
  };

  // --- Pie chart ---
  const PieChart = ({ data }) => {
    const size = 450;
    const cx = size / 2;
    const cy = size / 2;
    const r = 180;
    const colors = { Science: '#4A90E2', Commerce: '#F5A623', Arts: '#7ED321' };

    const entries = Object.entries(data).filter(([, v]) => v > 0);
    const total = entries.reduce((s, [, v]) => s + v, 0);

    let startAngle = -Math.PI / 2;
    const slices = entries.map(([label, value]) => {
      const pct = total > 0 ? value / total : 0;
      // If pct is 1, an arc from start to end would be 0 length. 
      // We use 0.9999 to ensure it draws almost a full circle.
      const angle = pct >= 1 ? 2 * Math.PI * 0.9999 : pct * 2 * Math.PI;
      const endAngle = startAngle + angle;

      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      const x2 = cx + r * Math.cos(endAngle);
      const y2 = cy + r * Math.sin(endAngle);
      const largeArc = angle > Math.PI ? 1 : 0;
      const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      const midAngle = startAngle + angle / 2;
      const labelR = r * 0.7;
      const lx = cx + labelR * Math.cos(midAngle);
      const ly = cy + labelR * Math.sin(midAngle);

      startAngle = endAngle;
      return { label, value, pct, path, lx, ly, color: colors[label] };
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {slices.map((s) => (
            <g key={s.label}>
              <path d={s.path} fill={s.color} stroke="rgba(0,0,0,0.25)" strokeWidth="2" />
              {s.pct > 0.04 && (
                <text
                  x={s.lx}
                  y={s.ly + 5}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="20"
                  fontWeight="bold"
                >
                  {Math.round(s.pct * 100)}%
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '18px', marginTop: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {slices.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: s.color }} />
              <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                {s.label}: <strong>{Math.round(s.pct * 100)}%</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (showResult) {
    const recommendedStream = calculateResult();
    const scores = getScores();
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
        <div className="glass" style={{ padding: '40px', maxWidth: '600px', width: '100%' }}>
          <h2 style={{ marginBottom: '20px' }}>Test Completed!</h2>

          {/* Pie Chart */}
          <PieChart data={scores} />

          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Based on your interests, we recommend:</p>
          <div style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: 'var(--primary-color)',
            marginBottom: '30px',
            padding: '20px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px'
          }}>
            {recommendedStream}
          </div>
          <p style={{ marginBottom: '40px', opacity: 0.8 }}>
            This stream aligns best with your natural inclinations and preferences. 
            You can now explore careers within this stream or choose another path.
          </p>
          <button 
            className="btn-primary" 
            onClick={() => onComplete(recommendedStream)}
          >
            Continue to Stream Selection
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = mcqData10th[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / mcqData10th.length) * 100;

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '40px' }}>
        <button className="btn-secondary" onClick={onBack}>← Quit Test</button>
        <div style={{ 
          height: '8px', 
          background: 'rgba(255,255,255,0.1)', 
          borderRadius: '4px', 
          marginTop: '20px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: `${progress}%`, 
            height: '100%', 
            background: 'var(--primary-color)',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <div style={{ marginTop: '10px', opacity: 0.5, fontSize: '0.9rem' }}>
          Question {currentQuestionIndex + 1} of {mcqData10th.length}
        </div>
      </div>

      <div className="glass" style={{
        padding: '40px',
        width: '100%',
        maxWidth: '800px',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        <h2 style={{ marginBottom: '30px', lineHeight: '1.4' }}>{currentQuestion.question}</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className="glass"
              onClick={() => handleAnswer(option.id)}
              style={{
                padding: '20px',
                textAlign: 'left',
                fontSize: '1.1rem',
                transition: 'all 0.2s ease',
                display: 'flex',
                gap: '15px',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateX(10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--glass-bg)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>
                {option.id}
              </div>
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MCQPage;
