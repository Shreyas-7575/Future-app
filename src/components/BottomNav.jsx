import React from 'react';
import { User, Home, Code, HelpCircle } from 'lucide-react';

const BottomNav = ({ onNavigate, onOpenModal }) => {
  return (
    <div className="glass" style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      padding: '10px 20px',
      zIndex: 100
    }}>
      <button 
        className="btn-secondary" 
        onClick={() => onOpenModal('profile')}
        title="Profile"
      >
        <User size={20} />
      </button>
      
      <button 
        className="btn-secondary" 
        onClick={() => onNavigate('welcome')}
        title="Home"
      >
        <Home size={20} />
      </button>
      
      <button 
        className="btn-secondary" 
        onClick={() => onOpenModal('made-by')}
        title="Made By"
      >
        <Code size={20} />
      </button>
      
      <button 
        className="btn-secondary" 
        onClick={() => onOpenModal('help')}
        title="Help"
      >
        <HelpCircle size={20} />
      </button>
    </div>
  );
};

export default BottomNav;
