import React from 'react';

import './style.css'
import logoImg from '../../assets/images/logo.svg';
import BgLogin from '../../assets/images/bg-login.svg';
import InputLogin from '../../components/InputLogin';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg'

function ResetPassword() {
    return (
        <>

            <div className="register_left">
                <form>
            <Link to="/login">
                <img src={backIcon} alt="back" />
            </Link>
                    <h1>Eita, esqueceu<br />sua senha?</h1>
                    <p>Não esquenta, vamos dar um jeito nisso.</p>

                    <InputLogin
                        name="email"
                        label="E-mail"
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

export default ResetPassword;