import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/39350730?s=460&u=82d063b7a08f675845b7fd6db669f7f6656c574b&v=4" alt="Leandro GUaraldi" />
            <div className="">
                <strong>Leandro Guaraldi</strong>
                <span>Quimíca</span>
            </div>
        </header>
        <p>Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.</p>
        <footer>
            <p>
           Preço/Hora
           <strong>R$ 10,00</strong> 
           </p>
           <button type="button">
               <img src={whatsappIcon} alt="Whats"/>Entrar em contato</button>
        </footer>
    </article>
    )
}

export default TeacherItem;