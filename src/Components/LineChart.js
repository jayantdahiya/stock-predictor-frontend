import React, { useContext, useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { AppContext } from "../App";

function Chart() {
  const {ticker} = useContext(AppContext);
  let [responseData, setResponseData] = useState();
  var apiData = [];

  // axios api fetch
  var bodyData = JSON.stringify({
    ticker: "GOOG",
  });

  var config = {
    method: "post",
    url: "https://stock-api-mzqhgu64aa-uc.a.run.app/predict",
    headers: {
      "Content-Type": "application/json",
    },
    data: bodyData,
  };
  async function fetchApi () {
    try {
      var axios = require("axios");
      await axios(config)
      .then(
        await function (response) {
          console.log(response.data);
          setResponseData(response.data);
          console.log(responseData);
          console.log(response.data);
        }
        .then(
          (apiData = [
            {
              date: responseData.forecast[0].date,
              price: responseData.forecast[0].price,
            },
            {
              date: responseData.forecast[1].date,
              price: responseData.forecast[1].price,
            },
            {
              date: responseData.forecast[2].date,
              price: responseData.forecast[2].price,
            },
            {
              date: responseData.forecast[3].date,
              price: responseData.forecast[3].price,
            },
            {
              date: responseData.forecast[4].date,
              price: responseData.forecast[4].price,
            },
            {
              date: responseData.forecast[5].date,
              price: responseData.forecast[5].price,
            },
            {
              date: responseData.forecast[6].date,
              price: responseData.forecast[6].price,
            },
          ])
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])
  

  console.log(apiData);
  
  if (!apiData) {
    return (
      <div class="radial-progress text-primary">
        Loading...
      </div>
    );
  } else {
    return (
      <LineChart
        width={600}
        height={350}
        data={apiData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="7 7" />
        <XAxis dataKey="date" />
        <YAxis dataKey="price" />
        <Tooltip />
      </LineChart>
    );
  }
}

export default Chart