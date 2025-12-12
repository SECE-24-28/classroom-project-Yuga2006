import { useState } from 'react';
import { useApp } from '../context/AppContext';

const RechargeForm = ({ onSubmit }) => {
  const { theme, selectedOperator, rechargeAmount } = useApp();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateMobileNumber = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    setIsValidNumber(value.length === 0 || validateMobileNumber(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateMobileNumber(mobileNumber) || !selectedOperator || !rechargeAmount) {
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      onSubmit({
        mobileNumber,
        operator: selectedOperator,
        amount: rechargeAmount
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">💳</span>
        </div>
        <h2 className="text-3xl font-bold gradient-text mb-2">Complete Payment</h2>
        <p className="text-gray-600">Secure and instant processing</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleNumberChange}
            placeholder="Enter 10-digit mobile number"
            className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 text-lg font-medium ${
              !isValidNumber 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200 focus:border-blue-500 bg-white'
            } focus:outline-none`}
            maxLength="10"
          />
          {!isValidNumber && mobileNumber.length > 0 && (
            <div className="flex items-center space-x-2 text-red-500 text-sm">
              <span>⚠️</span>
              <span>Please enter a valid 10-digit mobile number</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Selected Operator
          </label>
          <div className="p-6 rounded-2xl border-2 border-gray-200 bg-gray-50">
            {selectedOperator ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{selectedOperator.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-800">{selectedOperator.name}</div>
                    <div className="text-sm text-gray-600">{selectedOperator.description}</div>
                  </div>
                </div>
                <div className="text-green-500 text-2xl">✓</div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-4">
                <span className="text-4xl mb-2 block">📱</span>
                <span>No operator selected</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Recharge Amount
          </label>
          <div className={`p-6 rounded-2xl border-2 ${
            rechargeAmount ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  rechargeAmount ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gray-400'
                }`}>
                  <span className="text-white text-xl">💰</span>
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-800">
                    {rechargeAmount ? `₹${rechargeAmount}` : '₹0'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {rechargeAmount ? 'Plan selected' : 'No plan selected'}
                  </div>
                </div>
              </div>
              {rechargeAmount && (
                <div className="text-green-500 text-2xl">✓</div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🔒</span>
            </div>
            <span className="font-semibold text-blue-700">Secure Payment</span>
          </div>
          <p className="text-sm text-blue-600">
            Your payment is protected by 256-bit SSL encryption and processed instantly.
          </p>
        </div>

        <button
          type="submit"
          disabled={!isValidNumber || !mobileNumber || !selectedOperator || !rechargeAmount || isSubmitting}
          className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-5 rounded-2xl font-bold text-xl hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing Payment...</span>
            </div>
          ) : (
            <span>Pay ₹{rechargeAmount || 0} →</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default RechargeForm;