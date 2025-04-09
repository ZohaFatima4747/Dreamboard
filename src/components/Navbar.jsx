import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      {/* Sidebar Toggle Button  */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <button className="logo">Dreamboard</button>
    </nav>
  );
};

export default Navbar;



