import React, { useContext } from 'react'
import { AppContext } from '../App';
import { useNavigate } from "react-router-dom";

function Form() {
    var { ticker, setTicker } = useContext(AppContext);
    let navigate = useNavigate();

    async function handleClick() {
      // event.preventDefault()
      if (!ticker) {
        return(
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Please enter a valid ticker symbol</span>
          </div>
        </div>)
      } else {
        navigate("./Result", {replace: true})
      }
    }

    
  return (
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Stock Predictor</h1>
            <p class="py-6">
              This is a web app implementing Facebooks time-series forecasting
              model Prophet on the historical data of stock symbols that is
              gathered from Yahoo finacance API. Predict your next investments
              by typing in the stock symbol you want to predict.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Ticker symbol *</span>
                </label>
                <input
                  type="text"
                  placeholder="AAPL"
                  class="input input-bordered"
                  onChange={e => (setTicker(e.target.value))}
                  required="required"
                />
              </div>
              <div class="form-control">
                <div className="form-control">
                  <label class="label">
                    <span class="label-text">Select prediction model</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={null}
                  >
                    <option>FB-Prophet</option>
                    <option disabled>Linear Regression</option>
                  </select>
                </div>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary" onClick={handleClick}>
                  Predict
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Form