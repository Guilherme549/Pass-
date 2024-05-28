import React from 'react';
import './Register.css';
import logoPass from '../../img/logoPass.svg';

const SignupPage = () => {
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
        <div className="login-option">
          <span>Já possui conta?</span>
          <a href="/login" className="login-link">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
