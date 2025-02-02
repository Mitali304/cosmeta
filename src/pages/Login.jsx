import React, { useState } from 'react';

const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [user, setUser] = useState(null); // Track authenticated user

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setUser({ email: form.email }); // Mock login
    console.log("Login: ", form);
  };

  const handleSignup = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setUser({ email: form.email }); // Mock profile creation
    console.log("Signup: ", form);
  };

  const handleLogout = () => {
    setUser(null); // Log out the user
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        {user ? (
          // Show profile details when logged in
          <div style={{ textAlign: 'center' }}>
            <h2>Welcome, {user.email}!</h2>
            <button
              onClick={handleLogout}
              style={{ padding: '10px', backgroundColor: '#FF3B30', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '20px' }}
            >
              Logout
            </button>
          </div>
        ) : (
          // Show login/signup forms when logged out
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Welcome</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <button
                onClick={() => setForm({ ...form, isLogin: true })}
                style={{
                  flex: 1,
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: form.isLogin ? '#007BFF' : '#f1f1f1',
                  color: form.isLogin ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  marginRight: '5px',
                }}
              >
                Login
              </button>
              <button
                onClick={() => setForm({ ...form, isLogin: false })}
                style={{
                  flex: 1,
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: !form.isLogin ? '#007BFF' : '#f1f1f1',
                  color: !form.isLogin ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  marginLeft: '5px',
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
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button
                  onClick={handleLogin}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
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
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button
                  onClick={handleSignup}
                  style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
