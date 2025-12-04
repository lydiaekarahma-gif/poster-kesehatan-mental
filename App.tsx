import React, { useState } from 'react';
import HeroSplit from './components/HeroSplit';
import GeminiAdvisor from './components/GeminiAdvisor';

const App: React.FC = () => {
  const [showAdvisor, setShowAdvisor] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-900">
      <HeroSplit onLearnMore={() => setShowAdvisor(true)} />
      
      {showAdvisor && (
        <GeminiAdvisor onClose={() => setShowAdvisor(false)} />
      )}
    </div>
  );
};

export default App;