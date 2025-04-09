import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "../components/Navbar";
import "./Login.css";

const Login = ({ toggleSidebar }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showReset, setShowReset] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing Up:", email, password, confirmPassword);
    } else {
      console.log("Logging In:", email, password);
      navigate("/home");
    }
  };

  const handlePasswordReset = () => {
    if (!resetEmail) {
      alert("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        alert("Password reset email sent! Check your inbox.");
        setShowReset(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} /> 
      <div className={`login-container ${isSignUp ? "sign-up-mode" : ""}`}>
        <div className="login-box">
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {isSignUp && (
              <div className="input-group">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  required 
                />
              </div>
            )}
            <button type="submit" className="login-btn">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          {!isSignUp && (
            <p className="forgot-password" onClick={() => setShowReset(true)}>Forgot Password?</p>
          )}
          <p className="toggle-text" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
        </div>

        {/* ✅ Forgot Password Modal with Sliding Animation */}
        {showReset && (
          <div className={`reset-modal show-reset-modal`}>
            <h3>Reset Password</h3>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={resetEmail} 
              onChange={(e) => setResetEmail(e.target.value)} 
            />
            <button onClick={handlePasswordReset}>Send Reset Link</button>
            <p className="close-btn" onClick={() => setShowReset(false)}>Close</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;



