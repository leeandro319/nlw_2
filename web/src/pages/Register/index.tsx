import React from 'react';

import './style.css'
import logoImg from '../../assets/images/logo.svg';
import BgLogin from '../../assets/images/bg-login.svg';
import InputLogin from '../../components/InputLogin';

function Register() {
    return (
        <>
            <div className="register_left">
                <form>
                    <h1>Fazer Login</h1>
                    <p>Preencha os dados abaixo para começar.</p>
                    <InputLogin
                        name="name"
                        label="Nome"
                    />
                    <InputLogin
                        name="sobremone"
                        label="Sobremone"
                    />
                    <InputLogin
                        name="email"
                        label="E-mail"

                    />
                    <InputLogin
                        name="password"
                        label="Senha"
                        type="password"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>

            <div className="register_right">
                <img className="bg-login" src={BgLogin} alt="Proffy" />
                <div className="left-content">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
        </>
    )
}

export default Register;