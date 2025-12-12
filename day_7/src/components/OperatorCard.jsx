import { useState } from 'react';
import { useApp } from '../context/AppContext';

const OperatorCard = ({ operator, isSelected, onSelect }) => {
  const { theme } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform card-hover ${
        isSelected 
          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl scale-105' 
          : 'bg-white text-gray-800 hover:bg-gray-50 shadow-xl'
      }`}
      onClick={() => onSelect(operator)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {isSelected && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">✓</span>
        </div>
      )}

      <div className="text-center">
        <div className={`text-6xl mb-6 transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}>
          {operator.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-3">{operator.name}</h3>
        <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
          {operator.description}
        </p>
      </div>
    </div>
  );
};

export default OperatorCard;