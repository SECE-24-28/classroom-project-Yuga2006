import { useState } from 'react';
import { useApp } from '../context/AppContext';

const PlanCard = ({ plan, onSelect }) => {
  const { theme, setRechargeAmount } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSelect = () => {
    setRechargeAmount(plan.price);
    onSelect(plan);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      
      {plan.popular && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold">
            🔥 POPULAR
          </div>
        </div>
      )}

      <div className={`p-8 ${
        plan.popular 
          ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500' 
          : 'bg-gradient-to-br from-gray-600 to-gray-700'
      } text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-4xl font-bold mb-1">₹{plan.price}</div>
            <div className="text-sm opacity-90">{plan.validity}</div>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📶</span>
              </div>
              <span className="font-medium text-gray-700">Data</span>
            </div>
            <span className="font-bold text-blue-600 text-lg">{plan.data}</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📞</span>
              </div>
              <span className="font-medium text-gray-700">Calls</span>
            </div>
            <span className="font-bold text-green-600 text-lg">{plan.calls}</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">💬</span>
              </div>
              <span className="font-medium text-gray-700">SMS</span>
            </div>
            <span className="font-bold text-purple-600 text-lg">{plan.sms}</span>
          </div>
        </div>

        {plan.features && (
          <div className="mb-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-700">
                Additional Benefits ({plan.features.length})
              </span>
              <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {isExpanded && (
              <div className="mt-4 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          onClick={handleSelect}
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Select This Plan →
        </button>
      </div>
    </div>
  );
};

export default PlanCard;