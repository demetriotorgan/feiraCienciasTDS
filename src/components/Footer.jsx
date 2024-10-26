import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (    
    <footer>
      <div className='row'>        
        <div className='blue-bg col-lg-6'>          
          <p className='fs-3 fw-bold my-2 mx-3'>
              Acesse nossas redes sociais
          </p>          
        </div>                     
        <div className='blue-bg col-lg-6 d-flex justify-content-center align-items-center'>
          <ul>
            <li className='d-inline fs-1 p-3'><Link to='https://www.instagram.com/terceiraotds_/' className='link'><i class="fa-brands fa-square-instagram"></i></Link></li>
            <li className='d-inline fs-1 p-3'><Link to='https://www.tiktok.com/@terceirao.tds' className='link'><i class="fa-brands fa-tiktok"></i></Link></li>
            <li className='d-inline fs-1 p-3'><Link to='https://www.facebook.com/profile.php?id=620349858111971&_rdr' className='link'><i class="fa-brands fa-facebook"></i></Link></li>  
          </ul>        
        </div>           
      </div>
      <div className='row'>
      <div className='col-lg-4 bg-dark text-light'>
        <div className='mx-3'>
          <p className='fs-5'>Endereço <ion-icon name="location-outline"></ion-icon></p>
          <p className='lh-1 m-0'>Praça Matriz, 143 - Centro, Nova Londrina -PR</p>
          <p>CEP: 87970-000</p>          
        </div>
      </div>
      <div className='col-lg-4 bg-dark text-light'>
        <div className='mx-3'>
          <p className='fs-5'>Col. Est. Ary João Dresch <ion-icon name="school-outline"></ion-icon></p>
          <p className='lh-1 m-0'>Ensino Fundamental</p>
          <p className='lh-1 m-0'>Ensino Médio</p>
          <p className='lh-1 m-0'>Formação Docente</p>
          <p >Ensino Técnico</p>
        </div>
      </div>
      <div className='col-lg-4 bg-dark text-light'>
        <div className='mx-3'>
          <p className='fs-5 mx-3'>Links <ion-icon name="link-outline"></ion-icon></p>
          <p className='lh-1 mx-3'><ion-icon name="mail-outline"></ion-icon> Email: colary@hotmail.com</p>
          <p className='lh-1 mx-3'><ion-icon name="people-outline"></ion-icon> Fone: (44) 3432-1178</p>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer