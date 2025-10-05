import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/terra25/data-insights'); // Navigate to Data Insights page
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                 bg-white/10 border border-white/30 text-white 
                 hover:bg-white/20 hover:border-white/60 
                 transition-all duration-300 shadow-md"
    >
      <ChevronLeft className="w-5 h-5 text-white/90" />
      <span className="font-medium tracking-wide text-white">Back to Stations</span>
    </button>
  );
};

export default BackButton;
