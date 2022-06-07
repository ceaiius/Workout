import "../src/styles/App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Chest from "./muscleGroups/Chest";
import Shoulders from "./muscleGroups/Shoulders";
import Triceps from "./muscleGroups/Triceps";
import Back from "./muscleGroups/Back";
import Biceps from "./muscleGroups/Biceps";
import Calves from "./muscleGroups/Calves";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chest" element={<Chest/>}/>
          <Route path="/shoulders" element={<Shoulders/>}/>
          <Route path="/triceps" element={<Triceps/>}/>
          <Route path="/back" element={<Back/>}/>
          <Route path="/biceps" element={<Biceps/>}/>
          <Route path="/calves" element={<Calves/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
