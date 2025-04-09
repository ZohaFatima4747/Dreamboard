import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Hamburger Button (Only when Sidebar is Closed) */}
      {!isOpen && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close Button (Only when Sidebar is Open) */}
        {isOpen && (
          <button className="close-btn" onClick={toggleSidebar}>
            ✖
          </button>
        )}
        
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>🏠 Home</Link></li>
          <li><Link to="/profile" onClick={toggleSidebar}>👤 Profile</Link></li>
          <li><Link to="/settings" onClick={toggleSidebar}>⚙️ Settings</Link></li>
          <li><Link to="/notifications" onClick={toggleSidebar}>🔔 Notifications</Link></li>
          {/* <li><Link to="/messages" onClick={toggleSidebar}>📩 Messages</Link></li>
          <li><Link to="/explore" onClick={toggleSidebar}>🔍 Explore</Link></li> */}
          <li><Link to="/login" className="login-link" onClick={toggleSidebar}>🔑 Login</Link></li>
        </ul>
      </div>

      {/* Backdrop for Click to Close */}
      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;









