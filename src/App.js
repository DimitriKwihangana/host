
import './App.css';
import { Routes, Route } from "react-router-dom";
import App1 from './combo';
import App2 from './two';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/two" element={<App2 />} />
  
        </Routes>
      </div>
    </div>
  );
}

export default App;


