import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Project />} />
          <Route path="links" element={<Resources />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
