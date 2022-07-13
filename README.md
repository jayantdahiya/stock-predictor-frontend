<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Stock Predictor App</h2>
  <p align="center">
    Stock price forecasting using stock history data.
    <br />
    <a href="https://stock-predictor-react-fe.web.app"><strong>Web-App »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
 <summary>Table of content</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

</br>

<!-- GETTING STARTED -->
## Getting Started

To run this project locally use the instructions below along with the prerequisites.

## Prerequisites

This project requires the lastest version of node on your machine.
* HomeBrew Package Manager

  ```sh
  brew install node
  ```

## Installation

After installing node on your machine follow the following steps.


1. Clone the repo

   ```sh
   git clone https://github.com/jayantdahiya/stock-predictor-frontend
   ```
2. cd into the cloned repo

   ```sh
   cd /stock-predictor-frontend
   ```
3. Install npm packages
   ```sh
   npm install
   ```
4. Now run the app on your local server
   ```sh
   npm start
   ```

</br>

<!-- USAGE EXAMPLES -->
## Usage

The application can be used by simply putting in the ticker symbol of the stock you want to predict. The app will process the history data of the stock under the hood and display the result.

_For stock ticker symbol references, please refer to [Yahoo Finance](https://finance.yahoo.com/trending-tickers)_

</br>


<!-- ABOUT THE PROJECT -->
## About The Project

The project uses Facebook's forecasting model - Prophet. Prophet is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. 

</br>


## Built With

The frontend of the application is built on the following frameworks: 

[![Tools used](https://skills.thijs.gg/icons?i=react,tailwind,nodejs,figma&theme=light)](https://reactjs.org)

</br>

<!-- ROADMAP -->
## Roadmap

- [ ] Add light mode switch
- [ ] Add date selection option, for the history data start date.
- [ ] Add current ticker price update block (displaying live trends)
- [ ] Add search bar for users to search a ticker name and watch the trends
- [ ] Future integrations to the application
    - [ ] [Paper](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050916X00130/1-s2.0-S1877050916311619/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCU%2B0QFm%2F4bRCSqLyNm8qz25k99qrqf2rKUdZoIEQJEJwIhAODnd2hIwRWZ4DgCq75c%2Bg%2BbTpSwrx1AKVDxfOQ2qCVJKvoDCGIQBBoMMDU5MDAzNTQ2ODY1IgymOTp8W0epwQvJzXwq1wNodAPbkGFTfuSWjLCe1OGG8%2FuRD%2BLdAqbk6JDXxMSbXZ3b60u9sZfo3enPz56WqZMGmQiwbNRYZquAUBt0p9OoM8yu4xZJ1rVGHxGqAtlh2sgljda9EKwfjR99A40Pvo512Lc841xl%2B%2BS1MupQnnUooys8MKMOczxILYGDYg9dOenrFELDFwGX68WHtgJDCb9YFhfhI%2BJFG1xESqb%2BAlOUxpaZEUWC%2B3AHI2x1uI0GfDPpqbkXC9eT%2FHdanHLSifr0gzUkjSmA5LXYnTYi%2FCVtLIMq4OpDKF8UMlf9JVYiqmgftryQITQzMdfsVlAbFo0EANwlYa5H4PSm3HyLnVqBOuTRLQ3KkNvQbEcK2YVBFhNMNGb3e96VcmJT5ILB4DUf0ZENDY14jnlHBF8H5tUV1MBrtY3Xx0G1Hv%2FYV%2BTpj%2BX%2FXxHWQaF0%2FKeigX%2B3%2ByxF8TUukRJXpqOi68FmINTr7LUAtM7MkPMguBr0v7FtqQAeCwvDH3Pq640B%2BytaqcO%2FZrGDBzhErEh7hCf0ik3pVPlLz5Kv8D4KUX2%2FRb1eOAYE0yE6WNfyPplnrJTwa%2FmArUcbldEJshYrZbn8%2F%2BezP74E8tWRUD3lPYkGzULLvTojTYXVI3Mw2%2FC9kQY6pAGqcG1z46MOhqTPhJXmTQ2iafszAvjY4JWFIjKEXGQmeanq6OcOMLftaAhqnIq7pClpjniDqFOCdnmu%2F6Ti6MvuolAWQFVXoAHshA0%2BphHW2Bu9VwUnZQh5xxg7sM41HMIMf9zrwZf%2FjOfs3uxQgOSwlPB7j5HBkDyBcMe4s2iGfrw8ODq4tAWjeFag3032hPMdcnV8966fP1Uala4Y%2F6j1yC%2FKyw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220314T172707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYRT64AAMS%2F20220314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dbb181122692077b0f268d7abb483a2e345ee2e5146af764999aa1d63a630bfb&hash=e286d8216e30be42f030778cf72e807f47134cc712bbd54252e2505219bd728a&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877050916311619&tid=spdf-273b160b-f26b-43fb-bccc-7433660b5440&sid=4c5926362da3c74f503b8a4370eec5b17965gxrqb&type=client&ua=590605020754010606&rr=6ebeb7dcaf9c85e4)

</br>

<!-- License -->
## License

MIT License

Copyright (c) 2022 Prophet Stock Predictor App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#top">back to top</a>)</p>