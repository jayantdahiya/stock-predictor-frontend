import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Body/NavBar';
import Content from './Body/Content';
import Footer from './Body/Footer';
import { createContext, useState } from 'react';
import Result from './Body/Result';

export const AppContext = createContext();

function App() {
  const [ticker, setTicker] = useState();
  const [model, setModel] = useState();
  return (
      <AppContext.Provider value={{
        ticker,
        setTicker,
        model,
        setModel
      }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path='/result' element={<Result />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
  );
}

export default App;
