import React from "react";
import {useNavigate} from "react-router-dom";

const navigate = useNavigate();

export default function NavBar() {
  return (
    <nav>
        <ul className="NavBar">
      <button className="Home">Home</button>
        <button className="About">About</button>
        <button className="Map" onClick={() => navigate("/Map")}>Map</button>
        <button className="SupportUs">Support Us</button>
        <button className="Contact">Contact</button>
        </ul>
    </nav>
  );
}

