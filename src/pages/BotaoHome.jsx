import '../Style.css'
import React from "react";
import { Link } from "react-router-dom"; 
import { FaHome } from "react-icons/fa"; 

const HomeButton = () => {
  return (
    <Link to="/" className="home-button"> 
      <FaHome className="home-icon" /> Home
    </Link>
  );
};

export default HomeButton;