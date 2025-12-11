import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const Navbar = ({ title, showLogin = true }) => {
  const { theme, toggleTheme, user, login, logout } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    login({ name: 'Alex Johnson', email: 'alex@example.com' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">{title}</h1>
              <p className="text-xs text-gray-500">Instant Recharge</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={toggleTheme}
              className="w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
              }`}>
                <span className="text-xs">{theme === 'light' ? '☀️' : '🌙'}</span>
              </div>
            </button>

            {showLogin && (
              user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Hi, {user.name}</span>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="btn-primary"
                >
                  Get Started
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;