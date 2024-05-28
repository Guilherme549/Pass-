import React from 'react';
import './Register.css';
import logoPass from '../../img/logoPass.svg';
import { signInWithGoogle } from './firabase.js';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
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
    <div className="signup-page">
      <div className="signup-container">
        <div className="logo-container">
          <span className="logo-text">Pass+</span>
          <img src={logoPass} alt="Pass+" className="signup-logo" />
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Nome" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Senha" className="signup-input" />
          <input type="password" placeholder="Confirme a Senha" className="signup-input" />
          <button type="submit" className="signup-button">Cadastrar</button>
        </form>
        <div className="or-separator">
          <hr />
          <span>Ou</span>
          <hr />
        </div>
        <div className="google-login-container">
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
            Continue com Google
          </button>
        </div>
        <div className="login-option">
          <span>Já possui conta?</span>
          <a href="/login" className="login-link">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
