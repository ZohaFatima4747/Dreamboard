import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Home from "./pages/Home";



const AppRouter = ({ toggleSidebar }) => {
  return (
    <Routes>

      <Route path="/" element={<Home toggleSidebar={toggleSidebar} />} />
      <Route path="/login" element={<Login toggleSidebar={toggleSidebar}/>} />
      <Route path="/home" element={<Home toggleSidebar={toggleSidebar} />} />
      <Route path="/profile" element={<Profile toggleSidebar={toggleSidebar}/>} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/messages" element={<Messages  />} />
      <Route path="/notifications" element={<Notifications toggleSidebar={toggleSidebar} />} />
      <Route path="/settings" element={<Settings toggleSidebar={toggleSidebar}/>} />
     
    </Routes>
  );
};

export default AppRouter;


