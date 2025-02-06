import React, { useState } from 'react';

const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isLogin: true,  // default to login
  });

  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Email and Password are required");
      return;
    }
    setUser({ email: form.email });
    console.log("Login: ", form);
  };

  const handleSignup = () => {
    if (!form.email || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setUser({ email: form.email });
    console.log("Signup: ", form);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    // Implement Google login with Firebase or Google API
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: 'url(INSERT_YOUR_IMAGE_URL_HERE)', // Add your background image URL here
        backgroundSize: 'cover', // Ensures the image covers the whole page
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '450px',
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#FF69B4', // Matching title color with the theme
            marginBottom: '50px', // Increased space between title and "Welcome"
          }}
        >
          ✨ Beauty Auth ✨
        </div>

        {user ? (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginTop: '40px'  }}>Welcome, {user.email}!</h2>
            <button
              onClick={handleLogout}
              style={{
                padding: '12px 25px',
                backgroundColor: '#FF3B30',
                color: '#fff',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'all 0.3s ease',
                width: '100%',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#e02d24')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#FF3B30')}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginTop: '40px' }}>Welcome</h2> {/* Increased space */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '25px',
                marginTop:'50px',
              }}
            >
              <button
                onClick={() => setForm({ ...form, isLogin: true })}
                style={{
                  flex: 1,
                  padding: '15px',
                  cursor: 'pointer',
                  backgroundColor: form.isLogin ? '#FF69B4' : '#f1f1f1',
                  color: form.isLogin ? '#fff' : '#333',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                }}
              >
                Login
              </button>
              <button
                onClick={() => setForm({ ...form, isLogin: false })}
                style={{
                  flex: 1,
                  padding: '15px',
                  cursor: 'pointer',
                  backgroundColor: !form.isLogin ? '#FF69B4' : '#f1f1f1',
                  color: !form.isLogin ? '#fff' : '#333',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </button>
            </div>

            {form.isLogin ? (
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF69B4',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                  }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF69B4',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                  }}
                />
                <button
                  onClick={handleLogin}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FF69B4',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#ff3385')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#FF69B4')}
                >
                  Login
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF69B4',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                  }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF69B4',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                  }}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF69B4',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                  }}
                />
                <button
                  onClick={handleSignup}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#FF69B4',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#ff3385')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#FF69B4')}
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Google Login Button */}
            <div style={{ marginTop: '20px' }}>
              <button
                onClick={handleGoogleLogin}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#DB4437',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Login with Google
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
