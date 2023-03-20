import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
