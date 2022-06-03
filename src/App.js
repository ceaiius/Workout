import "./App.css"
import Title from './Title';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;