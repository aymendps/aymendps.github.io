import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { getPinnedProjectsByIndustry } from "./components/ProjectList";

function App() {
  const generateProjectRoutes = getPinnedProjectsByIndustry("all").map(
    (project) => {
      return (
        <Route
          key={"page-" + project.pageURL}
          path={"/projects" + project.pageURL}
          element={project.element}
        />
      );
    }
  );

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        {generateProjectRoutes}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
