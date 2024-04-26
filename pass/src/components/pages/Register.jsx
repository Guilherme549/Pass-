import React from 'react';
import './Register.css';
import logo from '../../img/logoPass+.png'
import registerImg from '../../img/register-page-img.svg'


export default function Register() {
    return (
        <div className="register-container">
            <div className="register-form">
                <div className='register-header'>
                    <img src={logo} alt="Pass+ Logo" className="logo" />
                    <h1 className='pass'>Pass+</h1>
                </div>

                <h1>Cadastre-se</h1>

                <label htmlFor="username">Nome de usuário</label>
                <input type="text" id="username" placeholder="Nome de usuário" name="username" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="E-mail" name="email" />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Senha" name="password" />

                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input type="password" id="confirmPassword" placeholder="Confirmar senha" name="confirmPassword" />

                <button type="submit">Cadastrar</button>
                <button type="button" className="login-link">Já possuo uma conta</button>
            </div>
            <div className="register-illustration">
                <img src={registerImg} alt="" />
            </div>
        </div>
    );
}
