import "./App.css";
import AboutMe from "./components/CV_information/AboutMe";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutMe" element={<AboutMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
