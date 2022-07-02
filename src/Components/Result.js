import React, { useContext } from 'react'
import Chart from './LineChart';


function Result() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Chart />
        <div className='text-center'>
          <h1 class="text-4xl">The Predicted Forecast</h1>
          <p class="py-6">
            This prediction is valuated by the prophet model by apply linear regression function on the historical data of the ticker. 
          </p>
          <button class="btn btn-primary">Retry</button>
        </div>
      </div>
    </div>
  );
}

export default Result