import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { getPinnedProjectsByIndustry } from "./components/ProjectList";
import { Suspense, useState } from "react";
import { CircularProgress } from "@mui/material";

function PageFallback() {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <CircularProgress className="text-cyan-600" size={75} disableShrink />
    </div>
  );
}

function App() {
  const [industry, setIndustry] = useState("all");

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
    <HashRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
          <Route
            index
            path="/home"
            element={<Home industry={industry} setIndustry={setIndustry} />}
          />
          {generateProjectRoutes}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
