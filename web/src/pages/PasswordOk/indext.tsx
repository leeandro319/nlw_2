import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import BgLogin from '../../assets/images/bg-login.svg';

function PasswordOk(){
    return(
        <div className="page-password-ok">
            <img className="bg-passwordok" src={BgLogin} alt="Proffy" />
            <h1>Redefinição Enviada</h1>
            <p>Boa, agora é só checar o e-mail que foi enviado para você</p>
            <p>redefinir sua senha e aproveitar os estudos.</p>
            <Link to='/login'>Voltar para o login</Link>
        </div>
    )
}

export default PasswordOk;