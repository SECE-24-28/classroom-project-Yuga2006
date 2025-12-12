import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import OperatorCard from '../components/OperatorCard';
import PlanCard from '../components/PlanCard';
import RechargeForm from '../components/RechargeForm';
import Modal from '../components/Modal';

const Home = () => {
  const { theme, selectedOperator, setSelectedOperator } = useApp();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const operators = [
    { id: 1, name: 'Airtel', icon: '🔴', description: 'India\'s fastest 5G network' },
    { id: 2, name: 'Jio', icon: '🔵', description: 'Digital India ka network' },
    { id: 3, name: 'Vi', icon: '🟣', description: 'Be unlimited with Vi' },
    { id: 4, name: 'BSNL', icon: '🟡', description: 'Connecting India since 1854' }
  ];

  const plans = [
    {
      id: 1,
      price: 299,
      validity: '28 Days',
      data: '1.5 GB/Day',
      calls: 'Unlimited',
      sms: '100/Day',
      popular: true,
      features: ['Free Roaming', 'Disney+ Hotstar Mobile', 'Wynk Music Premium']
    },
    {
      id: 2,
      price: 719,
      validity: '84 Days',
      data: '1.5 GB/Day',
      calls: 'Unlimited',
      sms: '100/Day',
      features: ['Free Roaming', 'Netflix Mobile', 'Amazon Prime Video']
    },
    {
      id: 3,
      price: 199,
      validity: '18 Days',
      data: '2 GB/Day',
      calls: 'Unlimited',
      sms: '100/Day',
      features: ['Free Roaming', 'Disney+ Hotstar']
    }
  ];

  const handleOperatorSelect = (operator) => {
    setSelectedOperator(operator);
    setCurrentStep(2);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setCurrentStep(3);
  };

  const handleRechargeSubmit = (rechargeData) => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setCurrentStep(1);
      setSelectedOperator('');
      setSelectedPlan(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Instant Mobile</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recharge
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience lightning-fast recharges with exclusive offers and instant processing
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            {[
              { step: 1, label: 'Choose Operator', icon: '📱' },
              { step: 2, label: 'Select Plan', icon: '💎' },
              { step: 3, label: 'Complete Payment', icon: '💳' }
            ].map(({ step, label, icon }) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl' 
                      : 'bg-white text-gray-400 shadow-lg'
                  }`}>
                    {currentStep > step ? '✓' : icon}
                  </div>
                  <span className={`mt-3 text-sm font-medium ${
                    currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                </div>
                {step < 3 && (
                  <div className={`w-20 h-1 mx-4 rounded-full ${
                    currentStep > step ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Step 1: Operator Selection */}
        {currentStep === 1 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">Choose Your Network</h2>
              <p className="text-xl text-gray-600">Select your mobile operator to continue</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {operators.map((operator) => (
                <OperatorCard
                  key={operator.id}
                  operator={operator}
                  isSelected={selectedOperator?.id === operator.id}
                  onSelect={handleOperatorSelect}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Plan Selection */}
        {currentStep === 2 && (
          <div>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-2">Choose Your Plan</h2>
                <p className="text-xl text-gray-600">Select the perfect plan for {selectedOperator?.name}</p>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} onSelect={handlePlanSelect} />
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Recharge Form */}
        {currentStep === 3 && (
          <div>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-2">Complete Your Recharge</h2>
                <p className="text-xl text-gray-600">Enter your details to proceed</p>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                ← Back
              </button>
            </div>
            <div className="max-w-2xl mx-auto">
              <RechargeForm onSubmit={handleRechargeSubmit} />
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Recharge Successful!"
        size="lg"
      >
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold mb-4 text-green-600">Payment Completed!</h3>
          <p className="text-xl text-gray-600 mb-8">
            Your mobile has been recharged with ₹{selectedPlan?.price} plan
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Home;