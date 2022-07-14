import React, { useContext } from 'react'
import { AppContext } from '../App';

function Stats() {
    const {responseData, ticker} = useContext(AppContext);
    if(responseData){
        return (
          <div>
            <div class="stats stats-horizontal lg:stats-vertical shadow">
              <div class="stat">
                <div class="stat-title">{ticker}</div>
                <div class="stat-value">{responseData[0].price.toFixed(2)}</div>
                <div class="stat-desc">{responseData[0].date}</div>
              </div>
              <div class="stat">
                <div class="stat-title">{ticker}</div>
                <div class="stat-value">{responseData[1].price.toFixed(2)}</div>
                <div class="stat-desc">{responseData[1].date}</div>
              </div>
              <div class="stat">
                <div class="stat-title">{ticker}</div>
                <div class="stat-value">{responseData[2].price.toFixed(2)}</div>
                <div class="stat-desc">{responseData[2].date}</div>
              </div>
            </div>
          </div>
        );
    }
}

export default Stats