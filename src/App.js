import Authentication from "./screens/Authentication";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth" element={ <Authentication /> } />
      </Routes>
      
      
    </div>
  );
}

export default App;
