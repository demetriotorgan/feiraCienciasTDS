import React from 'react'
import imagem from '../assets/hero.webp'
import { Link } from 'react-router-dom'
import './Herosection.css'

const Herosection = () => {
  return (
    <section className='heroSection'>
    <div className='container-fluid'>
        <div className='row align-items-center justify-content-between'>
            <div className='col-12 col-lg-6 p-5'>
                <h1 className='display-4 fw-bold'><span className='text-primary'>Descubra</span> o futuro da tecnologia</h1>
                <p className='lead pb-3'>Explore seus conhecimentos e habilidades e desenvolva novas seus conhecimentos digitais</p>
                <button className='btn btn-primary'><Link to={"/saibamais"} className='corTexto'> Saiba Mais</Link></button>
            </div>
            <div className='col-12 col-lg-6 p-0'>
                <img className='img-fluid' src={imagem} alt="imagem heroSection" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Herosection