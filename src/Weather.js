import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div>
        <div className="row">
          <h1>Cape Town</h1>
          <div className="col-6">
            <p>Last updated: Wednesday September 20 04:26</p>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
