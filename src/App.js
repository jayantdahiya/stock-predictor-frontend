import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Body/NavBar';
import Content from './Body/Content';
import Footer from './Body/Footer';
import { createContext, useState } from 'react';
import Result from './Body/Result';

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState('synthwave');
  var [ticker, setTicker] = useState();
  var [model, setModel] = useState();
  const apiUrl = process.env.REACT_APP_API_Link;
  const [responseData, setResponseData] = useState();

  // axios api fetch
  async function fetchApi() {
   if(ticker) {
     var bodyData = JSON.stringify({
       ticker: ticker,
     })
   } 
   
    var config = {
      method: "post",
      url: apiUrl,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: bodyData,
    };
    try {
      var axios = require("axios");
      await axios(config).then((response) =>
        setResponseData(response.data.forecast)
      );
    } catch (error) {
      console.log(error.message);
      alert(`Error: ${error}`, error.data);
    }
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        ticker,
        setTicker,
        model,
        setModel,
        responseData,
        fetchApi,
      }}
    >
      <div data-theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
