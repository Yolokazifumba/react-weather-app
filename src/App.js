import "./App.css";
import Searchengine from "./Searchengine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5">Weather App</h1>
        <Searchengine defaultcity="Cape Town" />
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
