import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import BgLogin from '../../assets/images/bg-login.svg';

function RegisterOk(){
    return(
        <div className="page-register-ok">
            <img className="bg-registerok" src={BgLogin} alt="Proffy" />
            <h1>Cadastro Concluído</h1>
            <p>Agora você parte da plataforma da Proffy.</p>
            <p>Tenha uma ótma expectativa.</p>
            <Link to='/register'>Fazer login</Link>
        </div>
    )
}

export default RegisterOk;