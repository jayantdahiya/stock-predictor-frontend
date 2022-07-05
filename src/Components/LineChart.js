import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { AppContext } from "../App";

function Chart() {
  const { ticker } = useContext(AppContext);
  let [responseData, setResponseData] = useState();
  var apiData = [];


  // axios api fetch
  if(ticker) {
    var bodyData = JSON.stringify({
      ticker: ticker,
    });
  } else {
    alert('No ticker name found!')
  }

  var config = {
    method: "post",
    url: "https://stock-api-mzqhgu64aa-uc.a.run.app/predict",
    headers: {
      "Content-Type": "application/json",
    },
    data: bodyData,
  };
  async function fetchApi() {
    try {
      var axios = require("axios");
      await axios(config).then((response) =>
        setResponseData(response.data.forecast)
      );
    } catch (error) {
      console.log(error.message);
      alert(`Error: ${error}`, error.data)
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);


  if (responseData) {
    apiData = [
      {
        date: responseData[0].date,
        price: responseData[0].price,
      },
      {
        date: responseData[1].date,
        price: responseData[1].price,
      },
      {
        date: responseData[2].date,
        price: responseData[2].price,
      },
      {
        date: responseData[3].date,
        price: responseData[3].price,
      },
      {
        date: responseData[4].date,
        price: responseData[4].price,
      },
      {
        date: responseData[5].date,
        price: responseData[5].price,
      },
      {
        date: responseData[6].date,
        price: responseData[6].price,
      },
    ];
  }

  console.log(apiData, "apiData");

  if (!apiData) {
    return <div class="radial-progress text-primary">Loading...</div>;
  } else {
    return (
      <LineChart
        width={600}
        height={350}
        data={apiData}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={1} />
        <YAxis dataKey="price" stroke="#ccc" domain={["auto" , "auto"]} />
        <Tooltip />
      </LineChart>
    );
  }
}

export default Chart;