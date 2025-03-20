/*import './pages.css';*/
import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
      <div className="auth-page">
        <div className="auth-left">
          {isLogin ? (
                <>
                  <h2 style={{ color:'#274472' }}>Login</h2>
                  <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" /><br/><br/>
                    <button type="submit">Login</button>
                  </form>
                </>
              ) : (
                <>
                  <h2 style={{ color:'#274472' }}>Sign Up</h2>
                  <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <select name="role">
                      <option disabled selected>Select Role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="trader">Trader</option>
                    </select><br/><br/>
                    <button type="submit">Sign Up</button>
                  </form>
                </>
              )}
        </div>
        <div className="auth-right">
          <h2>{isLogin ? "Don't have an account?" : "Already have an account?"}</h2>
            <p>{isLogin ? "Sign up to get started." : "Log in to continue."}</p>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign Up' : 'Login'}
            </button>
        </div>
      </div>
  );
};