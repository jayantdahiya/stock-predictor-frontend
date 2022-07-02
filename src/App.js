import './App.css';
import NavBar from './Components/NavBar';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { createContext, useState } from 'react';
import Result from './Components/Result';

export const AppContext = createContext();

function App() {
  const [ticker, setTicker] = useState('AAPL');
  const [model, setModel] = useState();
  return (
      <AppContext.Provider value={{
        ticker,
        setTicker,
        model,
        setModel
      }}>
        <NavBar />
        {/* <Content /> */}
        <Result />
        <Footer />
      </AppContext.Provider>
  );
}

export default App;
