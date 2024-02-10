import "./App.css";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        <p>
          This app was created by{" "}
          <a href="https://github.com/Yolokazifumba">Yolokazi Fumba</a> and it
          is open sourced on
          <a href="https://github.com/Yolokazifumba/react-weather-app">
            {" "}
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://app.netlify.com/sites/hilarious-yeot-56203a/overview">
            {" "}
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
