import React, { useContext, useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
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
  const { ticker, responseData } = useContext(AppContext);
  var apiData = [];
  var sample = [];

  if (responseData) {
    apiData = [
      {
        date: responseData[0].date,
        price: responseData[0].price.toFixed(2),
      },
      {
        date: responseData[1].date,
        price: responseData[1].price.toFixed(2),
      },
      {
        date: responseData[2].date,
        price: responseData[2].price.toFixed(2),
      },
      {
        date: responseData[3].date,
        price: responseData[3].price.toFixed(2),
      },
      {
        date: responseData[4].date,
        price: responseData[4].price.toFixed(2),
      },
      {
        date: responseData[5].date,
        price: responseData[5].price.toFixed(2),
      },
      {
        date: responseData[6].date,
        price: responseData[6].price.toFixed(2),
      },
    ];
  }

  console.log(apiData, "apiData");

  if (sample === []) {
    return (
      <div class="h[600px] w-auto">
        <LoadingOverlay spinner active={true} text="Loading..."></LoadingOverlay>
      </div>
    );
  } else {
    return (
      <LineChart
        width={600}
        height={350}
        data={apiData}
        margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        <XAxis dataKey="date" interval={1} />
        <YAxis
          dataKey="price"
          domain={["auto", "auto"]}
        />
        <Tooltip />
      </LineChart>
    );
  }
}

export default Chart;