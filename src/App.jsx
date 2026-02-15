import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import SelectionPage from './components/SelectionPage';
import BottomNav from './components/BottomNav';
import LoginModal from './components/LoginModal';
import InfoModal from './components/InfoModal';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import StreamSelectionPage from './components/StreamSelectionPage';
import CareerOptionsPage from './components/CareerOptionsPage';

function App() {
  const [view, setView] = useState('welcome'); // welcome, login, selection, quiz, result, stream-selection, career-options
  const [user, setUser] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [quizScores, setQuizScores] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  const handleStart = () => {
    if (user) {
      setView('selection');
    } else {
      setView('login');
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setView('selection');
  };

  const handleClassSelection = (grade) => {
    if (grade === '10th') {
      setView('quiz');
    } else {
      alert('After Class 12th path is coming soon!');
    }
  };

  const handleQuizComplete = (scores) => {
    setQuizScores(scores);
    setView('result');
  };
  
  const handleResultNext = () => {
    setView('stream-selection');
  };

  const handleStreamSelect = (streamId) => {
    setSelectedStream(streamId);
    setView('career-options');
  };

  const handleCareerSelect = (careerTitle) => {
    alert(`Video content for ${careerTitle} coming soon!`);
  };

  const handleBackToStreams = () => {
    setView('stream-selection');
  };

  const handleNavigate = (targetView) => {
    // Reset flow if going home
    if (targetView === 'welcome') {
      setQuizScores(null);
      setSelectedStream(null);
    }
    setView(targetView);
  };

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Modal Content Logic (same as before)
  const getModalContent = () => {
    switch (activeModal) {
      case 'profile':
        return {
          title: 'User Profile',
          content: user ? (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p style={{ marginTop: '10px', opacity: 0.7 }}>Status: Aspiring Student</p>
              {quizScores && (
                 <div style={{ marginTop: '20px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                   <p><strong>Last Quiz Result:</strong></p>
                   <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                     <li>Science: {quizScores.Science}</li>
                     <li>Commerce: {quizScores.Commerce}</li>
                     <li>Arts: {quizScores.Arts}</li>
                   </ul>
                 </div>
              )}
            </div>
          ) : (
            <p>Please login to view your profile details.</p>
          )
        };
      case 'made-by':
        return {
          title: 'Made By',
          content: (
            <div>
              <p><strong>Developer:</strong> [Developer Name]</p>
              <p><strong>Contact:</strong> +1 (555) 123-4567</p>
              <p style={{ marginTop: '15px' }}>
                Built with React & Passion to help students decide their future.
              </p>
            </div>
          )
        };
      case 'help':
        return {
          title: 'How to Use',
          content: (
            <div>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Click <strong>Start</strong> and Login.</li>
                <li>Select <strong>After Class 10th</strong>.</li>
                <li>Complete the <strong>25 Question Quiz</strong>.</li>
                <li>View your <strong>Results & Suggestions</strong>.</li>
                <li>Select a <strong>Stream</strong> and then a <strong>Career Field</strong> to learn more.</li>
              </ol>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const modalData = getModalContent();

  return (
    <div className="app-container">
      {view === 'welcome' && <WelcomePage onStart={handleStart} />}
      
      {view === 'login' && (
        <>
          <WelcomePage onStart={() => {}} />
          <LoginModal onLogin={handleLogin} />
        </>
      )}

      {view === 'selection' && (
        <SelectionPage 
          userName={user?.name || 'Student'} 
          onSelect={handleClassSelection} 
        />
      )}

      {view === 'quiz' && (
        <QuizPage 
          onComplete={handleQuizComplete} 
          onBack={() => setView('selection')} 
        />
      )}
      
      {view === 'result' && quizScores && (
        <ResultPage scores={quizScores} onNext={handleResultNext} />
      )}
      
      {view === 'stream-selection' && (
        <StreamSelectionPage onSelectStream={handleStreamSelect} />
      )}

      {view === 'career-options' && selectedStream && (
        <CareerOptionsPage 
          stream={selectedStream} 
          onSelectCareer={handleCareerSelect} 
          onBack={handleBackToStreams}
        />
      )}

      <BottomNav onNavigate={handleNavigate} onOpenModal={handleOpenModal} />

      {activeModal && (
        <InfoModal 
          title={modalData.title} 
          content={modalData.content} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
