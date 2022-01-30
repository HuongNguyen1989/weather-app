import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <span class="github-link">
        <a
          href="https://github.com/HuongNguyen1989/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Huong Nguyen
      </span>
    </div>
  );
}

export default App;
