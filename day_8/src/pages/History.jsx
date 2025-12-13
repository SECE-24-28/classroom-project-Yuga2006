import RechargeHistory from '../components/RechargeHistory';
import { useApp } from '../context/AppContext';

const History = () => {
  const { rechargeHistory } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Transaction</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              History
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track all your mobile recharges and transactions in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📊</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">{rechargeHistory.length}</div>
            <div className="text-gray-600">Total Recharges</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💰</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              ₹{rechargeHistory.reduce((total, recharge) => total + recharge.amount, 0)}
            </div>
            <div className="text-gray-600">Total Spent</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {rechargeHistory.length > 0 ? 'Active' : 'None'}
            </div>
            <div className="text-gray-600">Status</div>
          </div>
        </div>

        {/* Recharge History */}
        <RechargeHistory />
      </div>
    </div>
  );
};

export default History;