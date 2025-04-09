import React, { useState, useContext, } from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/Home";
import "./App.css";
import AppRouter from "./Router"; 
import { BrowserRouter } from "react-router-dom";


function App() {
 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
 
    <BrowserRouter>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`content ${sidebarOpen ? "sidebar-open" : ""}`}>
          <AppRouter toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;







