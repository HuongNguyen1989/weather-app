import React from "react";
import "./weather-app.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div id="cover">
        <form id="city-search">
          <input
            type="text"
            placeholder="Enter a city"
            id="text-search"
            autocomplete="off"
          />
          <i class="fas fa-search"></i>
        </form>
        <h3 id="city-name">Hanoi, Vietnam</h3>
        <h3 id="current-time">Tuesday, 4:30 pm ICT</h3>
        <div class="row">
          <div class="col-6">
            <span id="today-temp">23</span>
            <span class="tempUnit">
              <a id="celsius" href="#" class="active">
                °C
              </a>{" "}
              |
              <a id="fahrenheit" href="#">
                °F
              </a>
            </span>
          </div>
          <div class="col-6">
            <img src="" alt="Clear" id="icon" class="float-left" />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div id="today-temp-range">🌡 : 23°-15°</div>
            <div id="today-humd">💧 : 39%</div>
            <div id="today-wind">💨: 10km/h</div>
          </div>
          <div class="col-6">
            <div id="today-description">cloudy</div>
          </div>
        </div>
        <hr />
        <div class="weather-forecast" id="forecast"></div>
        <hr />
        <p>
          "Make each day a masterpiece"
          <br />- John Wooden-
        </p>
        <hr />
      </div>
    </div>
  );
}
