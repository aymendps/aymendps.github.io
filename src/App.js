import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { PROJECTS } from "./components/ProjectList";
import Resume from "./components/Resume";

function App() {
  const generateProjectRoutes = PROJECTS.map((project) => {
    return (
      <Route
        key={"page " + project.pageURL}
        path={project.pageURL}
        element={project.element}
      />
    );
  });

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about-me" element={<AboutMe />} />
        {generateProjectRoutes}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
