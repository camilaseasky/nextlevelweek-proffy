import React from 'react';
import avatarImg from '../../assets/avatars/eduardo.jpg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


const TeacherItem: React.FC = () => {

  return (
    <article className="teacher-item">
         <header>
           <img src={avatarImg} alt=""/>
           <div>
             <strong>Diego Fernandes</strong>
             <span>Química</span>
           </div>
         </header>
         <p>
           Entusiasta das melhores tecnologias de química avançada.
           <br /> <br />
           Apaixonado por explodir coisas no meu laboratório. Mais de 200.000 pessoas já passaram por minhas explosões.
         </p>

         <footer>
           <p>Preço/hora
             <strong>R$ 80,00</strong>
           </p>
           <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
         </footer>
       </article>
  )
}

export default TeacherItem;
