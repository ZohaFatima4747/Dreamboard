import React, { useEffect, useState } from "react";
import { db } from "../firebase.jsx";
import { query, onSnapshot, orderBy } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Sidebar from "../components/Sidebar";
import "../styles/Notification.css"


const addNotification = async (userId, message) => {
  try {
    await addDoc(collection(db, "notifications"), {
      userId: userId, 
      message: message, 
      timestamp: serverTimestamp(), 
    });
    console.log("Notification added!");
  } catch (error) {
    console.error("Error adding notification:", error);
  }
};

const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Firestore collection reference
    const q = query(collection(db, "notifications"), orderBy("timestamp", "desc"));

    // Real-time listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let notifs = [];
      snapshot.forEach((doc) => {
        notifs.push({ id: doc.id, ...doc.data() });
      });
      setNotifications(notifs);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    
    <div className="notifications-container">
      <Sidebar className="sidebar-toggle"    isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        notifications.map((notif) => (
          <div key={notif.id} className="notification-item">
            <p>{notif.message}</p>
            <small>{new Date(notif.timestamp?.seconds * 1000).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;







