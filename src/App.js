import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather />
        <p>
          This app was created by{" "}
          <a href="https://github.com/Yolokazifumba">Yolokazi Fumba</a> and it
          is an
          <a href="https://github.com/Yolokazifumba/react-weather-app">
            {" "}
            open-source code
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
