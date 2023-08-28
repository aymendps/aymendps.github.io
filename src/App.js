import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { PINNED_PROJECTS } from "./components/ProjectList";
import Resume from "./components/Resume";

function App() {
  const generateProjectRoutes = PINNED_PROJECTS.map((project) => {
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
        {/* <Route path="/resume" element={<Resume />} /> */}
        {generateProjectRoutes}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
