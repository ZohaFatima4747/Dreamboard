import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigation Hook
import "../styles/Settings.css";
import { FaSearch, FaUserEdit, FaPalette, FaUserShield, FaSignOutAlt } from "react-icons/fa";



const Settings = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showEditProfile, setShowEditProfile] = useState(false);
    const navigate = useNavigate(); // ✅ Navigation Hook

    // Settings Options Data
    const settingsOptions = [
        { id: 1, name: "Edit Profile", icon: <FaUserEdit />, category: "Profile Settings"},
        { id: 2, name: "Theme Settings", icon: <FaPalette />, category: "Theme Settings" },
        { id: 3, name: "Manage Privacy", icon: <FaUserShield />, category: "Privacy Settings" },
        { id: 4, name: "Logout", icon: <FaSignOutAlt />, category: "Account Settings" },
    ];

    // Search Functionality
    const filteredOptions = settingsOptions.filter((option) =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="settings-container">
           
            
            {showEditProfile ? (
               
               <EditProfile />

            ) : (
                
                <>
                    {/* Top Header */}
                    <div className="settings-header">
                        <h2>Settings and Activity</h2>
                        <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input 
                                type="text" 
                                placeholder="Search" 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Settings List */}
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <div key={option.id} className="settings-section">
                                <h3>{option.category}</h3>
                                <div className="settings-item" onClick={option.action}>
                                    {option.icon}
                                    <p>{option.name}</p>
                                    <span className="arrow">{">"}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No results found</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Settings;
