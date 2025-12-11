import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Navbar title="Mobile Recharge App" showLogin={true} />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;