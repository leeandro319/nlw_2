import React, { useState } from 'react';

import './styles.css'
import logoImg from '../../assets/images/logo.svg';
import BgLogin from '../../assets/images/bg-login.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import InputLogin from '../../components/InputLogin';
import { Link } from 'react-router-dom';


function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    function handleLogin(){
        alert('teste')
    }

  

    return (
        <>
            <div className="page-login-left">
                <img className="bg-login" src={BgLogin} alt="Proffy" />
                <div className="left-content">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

            </div>
            <div className="page-login-right">
                <div className="right-content">
                <form onSubmit={handleLogin}>
                    <h1>Fazer Login</h1>
                    <InputLogin
                        name="email"
                        label="E-mail"
                        value={emailLogin}
                        onChange={(e) => { setEmailLogin(e.target.value) }}
                        />
                    <InputLogin 
                        name="password" 
                        label="Senha" 
                        type="password" 
                        value={passwordLogin}
                        onChange={(e) => { setPasswordLogin(e.target.value) }} 
                        />
                    <div className="info_password">
                        <div className="remember">
                            <input type="checkbox" name="remember_password" />
                            <label htmlFor="remember_password">Lembrar-me</label>
                        </div>
                        <span>Esqueci minha senha</span>
                    </div>
                    <button type="submit">Entrar</button>
                    </form>
                </div>
                <div className="footer-right">
                    <div className="acc_add">
                        <span>Não tem conta?</span>
                        <Link to='/register'>Cadastre-se </Link>
                    </div>
                    <span>É de graça    <img src={purpleHeartIcon} alt="Coração roxo "/></span>
                    
                </div>
            </div>
        </>
    )
}

export default Login;