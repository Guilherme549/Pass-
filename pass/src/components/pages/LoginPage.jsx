import React from 'react';
import './LoginPage.css';
import logoPass from '../../img/logoPass.svg';
import { signInWithGoogle } from './firabase.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/loggedin');
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src={logoPass} alt="Pass+" className="login-logo" />
          <span className="logo-text">Pass+</span>
        </div>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Senha" className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="google-login-container">
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
            Continue com Google
          </button>
        </div>
        <div className="signup-option">
          <span>Não possui conta?</span>
          <a href="/register" className="signup-link">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
