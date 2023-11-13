import logo from "./logo.svg";
import "./App.css";
import testst from "./first-aid.jpg";
import { Navbar } from "./navbar";

function App1() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <img src={testst} alt="firstaid" />
      </header>
    </div>
  );
}

export default App1;
