import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { AppContext } from "../App";

function Chart() {
  const { ticker } = useContext(AppContext);
  let [responseData, setResponseData] = useState();
  var apiData = [];

  // axios api fetch
  var bodyData = JSON.stringify({
    ticker: ticker,
  });

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
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  //   if (responseData) {
  //     console.log(responseData[1].date,"responseData",responseData[1].price)
  //     for (let i = 0; i < responseData.length; i++) {
  //       apiData.push({ date: responseData[i].date, price: responseData[i].price });
  //     }
  //   }
  // console.log(apiData,"niceeee", responseData)

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

export default Chart;
