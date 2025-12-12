import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    selectedOperator,
    setSelectedOperator,
    rechargeAmount,
    setRechargeAmount
  };

  return (
    <AppContext.Provider value={value}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </AppContext.Provider>
  );
};