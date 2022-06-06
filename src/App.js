import "../src/styles/App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Chest from "./muscleGroups/Chest";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chest" element={<Chest/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
