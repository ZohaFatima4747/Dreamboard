import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";

import profileImg from "../assets/profile.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
import post4 from "../assets/post4.jpg";
import post5 from "../assets/post5.jpg";
import post6 from "../assets/post6.jpg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [category, setCategory] = useState("Explorer");
  const [career, setCareer] = useState("Career");
  const [loading, setLoading] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const savedProfile = JSON.parse(localStorage.getItem("profileData"));
      if (savedProfile) {
        setName(savedProfile.name || "");
        setUsername(savedProfile.username || "");
        setBio(savedProfile.bio || "");
        setCategory(savedProfile.category || "Explorer");
        setCareer(savedProfile.career || "Career");
      }
      setLoading(false);
    }, 500);
  }, [forceUpdate]);

  const handleSave = () => {
    const updatedProfile = {
      name,
      username,
      bio,
      category,
      career,
    };
    localStorage.setItem("profileData", JSON.stringify(updatedProfile));
    setForceUpdate(forceUpdate + 1);
    alert("Profile Updated!");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="profile-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`profile-content ${sidebarOpen ? "sidebar-open" : ""}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>

        <div className="profile-header">
          <div className="profile-top-section">
            <img src={profileImg} alt="User" className="profile-pic" />

            <div className="profile-info-right">
              {loading ? (
                <div className="skeleton-box name-placeholder"></div>
              ) : (
                <h2>{name || "Your Name"}</h2>
              )}

              <div className="profile-stats">
                <span><strong>10</strong> Dreams</span>
                <span><strong>50</strong> Followers</span>
                <span><strong>30</strong> Following</span>
              </div>
            </div>
          </div>

          <div className="profile-details-below">
            {loading ? (
              <div className="skeleton-box username-placeholder"></div>
            ) : (
              <p>{username || "@your_username"}</p>
            )}
            {loading ? (
              <div className="skeleton-box bio-placeholder"></div>
            ) : (
              <p className="bio-text">{bio || "Your bio goes here..."}</p>
            )}
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Career:</strong> {career}</p>

            <button className="edit-profile-btn" onClick={handleSave}>Edit Profile</button>
          </div>
        </div>

        <div className="profile-tabs">
          <button onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? "active" : ""}>Posts</button>
          <button onClick={() => setActiveTab("pinned")} className={activeTab === "pinned" ? "active" : ""}>Pinned Dreams</button>
          <button onClick={() => setActiveTab("progress")} className={activeTab === "progress" ? "active" : ""}>Progress Tracker</button>
        </div>

        <div className="tab-content">
          {activeTab === "posts" && (
            <div className="posts-grid">
              {[post1, post2, post3, post4, post5, post6].map((post, index) => (
                <div className="post" key={index}><img src={post} alt={`Post ${index + 1}`} className="post-img" /></div>
              ))}
            </div>
          )}

          {activeTab === "pinned" && (
            <div className="pinned-grid">
              {[post4, post2, post6].map((post, index) => (
                <div className="pinned-item" key={index}>📌 <img src={post} alt={`Pinned ${index + 1}`} className="post-img" /></div>
              ))}
            </div>
          )}

          {activeTab === "progress" && (
            <div className="progress-tracker">
              <p>🚀 Dream Progress: 70%</p>
              <progress value="70" max="100"></progress>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;








