import React, { useContext } from 'react'
import Chart from '../Components/LineChart';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../App';
import Stats from '../Components/Stats';


function Result() {
  const {responseData} = useContext(AppContext);

  let navigate = useNavigate();

  function handleClick(event){
    event.preventDefault()
    navigate("/", {replace: true})
  }

  
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div class="hero-content flex flex-col w-full">
        <div class="text-center">
          <h1 class="text-4xl">Predicted Forecast</h1>
          <p class="py-6">
            This prediction is valuated by the prophet model by apply linear
            regression function on the historical data of the ticker.
          </p>
          <button class="btn btn-primary" onClick={handleClick}>
            Retry
          </button>
        </div>
        <div class="divider w-full"></div>
        <div class="flex flex-col lg:flex-row">
          <div class="flex items-center justify-center">
            <Stats />
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result