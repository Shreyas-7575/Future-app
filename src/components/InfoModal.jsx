import React from 'react';
import { X } from 'lucide-react';

const InfoModal = ({ title, content, onClose }) => {
  if (!title) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }} onClick={onClose}>
      <div 
        className="glass animate-fade-in" 
        style={{
          padding: '30px',
          maxWidth: '500px',
          width: '90%',
          position: 'relative',
          backgroundColor: '#1e293b' // Fallback/base
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            opacity: 0.7
          }}
        >
          <X size={24} />
        </button>
        
        <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>{title}</h2>
        <div style={{ lineHeight: '1.6', opacity: 0.9 }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
