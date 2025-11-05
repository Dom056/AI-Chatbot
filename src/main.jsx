import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Map from "./Pages/Map.jsx";
import About from "./Pages/About.jsx";
import SupportUs from "./Pages/SupportUs.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ChatBot from "./Pages/ChatBot.jsx";
import './index.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />         
      <Route path="about" element={<About />} />  
      <Route path="map" element={<Map />} />  
      <Route path="supportus" element={<SupportUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aichatbot" element={<ChatBot />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
);