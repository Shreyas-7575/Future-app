import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = {
  Science: '#38bdf8', // primary
  Commerce: '#c084fc', // accent
  Arts: '#818cf8', // secondary
};

const ResultPage = ({ scores, onNext }) => {
  const total = scores.Science + scores.Commerce + scores.Arts;
  
  const data = [
    { name: 'Science', value: scores.Science },
    { name: 'Commerce', value: scores.Commerce },
    { name: 'Arts', value: scores.Arts },
  ].filter(item => item.value > 0);

  const getSuggestion = () => {
    const maxScore = Math.max(scores.Science, scores.Commerce, scores.Arts);
    const topFields = Object.keys(scores).filter(key => scores[key] === maxScore);
    
    if (topFields.length > 1) {
      return `You have a versatile profile! You show equally strong potential in ${topFields.join(' and ')}. Consider which subjects you enjoy studying the most.`;
    }
    
    switch (topFields[0]) {
      case 'Science':
        return "Your analytical and logical skills are strong! You seek to understand how the world works, whether through technology, medicine, or research. Science seems like a great fit for you.";
      case 'Commerce':
        return "You have a strategic mindset and an eye for value. Whether it's business, finance, or management, you seem well-suited for the dynamic world of Commerce.";
      case 'Arts':
        return "You are creative, expressive, and socially aware. You might thrive in fields that involve communication, innovation, human behavior, or the arts.";
      default:
        return "Keep exploring your interests!";
    }
  };

  return (
    <div className="animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Your Results</h1>
      
      <div className="glass" style={{ 
        width: '100%', 
        height: '450px', 
        padding: '30px',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelStyle={{ fill: '#fff', fontSize: '16px', fontWeight: 'bold' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="glass" style={{
        padding: '30px',
        textAlign: 'center',
        marginBottom: '40px',
        width: '100%'
      }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Our Suggestion</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9 }}>
          {getSuggestion()}
        </p>
      </div>

      <button 
        className="btn-primary" 
        onClick={onNext}
        style={{ 
          padding: '18px 70px', 
          fontSize: '1.3rem',
          marginBottom: '80px',
          boxShadow: '0 4px 20px rgba(56, 189, 248, 0.4)'
        }}
      >
        Next Step
      </button>
    </div>
  );
};

export default ResultPage;
