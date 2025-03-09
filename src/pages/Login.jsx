import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        localStorage.setItem("user", JSON.stringify(storedUser));
        setUser(storedUser);
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      localStorage.setItem("registeredUser", JSON.stringify(formData));
      alert("Signup successful! Please log in.");
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
    }}
  >
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "15px",
          boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.2)",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          transform: "scale(0.9)",
          opacity: "0",
          animation: "fadeIn 0.6s ease-in-out forwards",
        }}
      >
        <h1
          style={{
            color: "#d81b60",
            fontSize: "30px",
            marginBottom: "20px",
            opacity: "0",
            transform: "translateY(-20px)",
            animation: "slideDown 0.5s ease-out 0.2s forwards",
          }}
        >
          {user ? "Dashboard" : isLogin ? "Login" : "Sign Up"}
        </h1>

        {user ? (
          <div>
            <h2 style={{ color: "#333", fontSize: "22px" }}>Welcome, {user.email}!</h2>
            <p style={{ color: "#555", fontSize: "16px" }}>You are logged in.</p>
            <button
              onClick={handleLogout}
              style={{
                padding: "15px 25px",
                backgroundColor: "#d81b60",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "10px",
                fontSize: "18px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleAuth} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              style={{
                padding: "15px",
                margin: "10px 0",
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "10px",
                fontSize: "18px",
                transition: "all 0.3s ease",
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              style={{
                padding: "15px",
                margin: "10px 0",
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "10px",
                fontSize: "18px",
                transition: "all 0.3s ease",
              }}
            />
            {!isLogin && (
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                onChange={handleChange}
                style={{
                  padding: "15px",
                  margin: "10px 0",
                  width: "100%",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  fontSize: "18px",
                  transition: "all 0.3s ease",
                }}
              />
            )}
            <button
              type="submit"
              style={{
                padding: "15px",
                backgroundColor: "#d81b60",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "10px",
                width: "100%",
                fontSize: "20px",
                marginTop: "15px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        )}

        {!user && (
          <p
            style={{
              cursor: "pointer",
              color: "#d81b60",
              marginTop: "15px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "opacity 0.3s ease",
            }}
            onClick={() => setIsLogin(!isLogin)}
            onMouseOver={(e) => (e.target.style.opacity = "0.7")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AuthPage;
