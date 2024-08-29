import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { PINNED_PROJECTS } from "./components/ProjectList";
import Landing from "./components/Landing";
import { useMemo, useState } from "react";

function App() {
  const [industry, setIndustry] = useState("");
  const generateProjectRoutes = PINNED_PROJECTS.map((project) => {
    return (
      <Route
        key={"page-" + project.pageURL}
        path={"/projects" + project.pageURL}
        element={project.element}
      />
    );
  });

  useMemo(() => {
    var storedIndustry = sessionStorage.getItem("industry");
    if (storedIndustry) setIndustry(storedIndustry);
  }, []);

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route
          path="/landing"
          element={
            <Landing
              setIndustry={(i) => {
                sessionStorage.setItem("industry", i);
                setIndustry(i);
              }}
            />
          }
        />
        <Route
          path="/home"
          element={
            industry !== "" ? (
              <Home industry={industry} />
            ) : (
              <Navigate to="/landing" replace />
            )
          }
        />
        {generateProjectRoutes}
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
