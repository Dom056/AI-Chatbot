import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import MapPage from "./Pages/Map.jsx"; // renamed Map to MapPage to avoid JS Map conflict

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />          {/* '/' */}
      <Route path="map" element={<MapPage />} />  {/* '/map' */}
    </Routes>
  </BrowserRouter>
);