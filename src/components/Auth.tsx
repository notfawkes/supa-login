import React, { useState } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import './Auth.css';

interface AuthUIProps {
  supabaseClient: SupabaseClient;
}

const AuthUI: React.FC<AuthUIProps> = ({ supabaseClient }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  async function handleGoogleSignIn() {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          }
        }
      });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  }

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  }

  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" onClick={handleGoogleSignIn} className="social">G+</a>
          </div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" onClick={handleGoogleSignIn} className="social">G+</a>
          </div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUI; 