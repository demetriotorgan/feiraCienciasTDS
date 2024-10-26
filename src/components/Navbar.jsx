import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg  navbar-light">
  <div className="container mx-5">
    <a className="navbar-brand fw-bold fs-2 text-primary" href="#"><Link to="/">TDS</Link></a>
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fs-5 fw-bold" aria-current="page" href="#"><Link to="/">Início</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><Link to="/sobre">Sobre</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#"><Link to="/alunos">Alunos</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-5" href="#" tabIndex="-1" aria-disabled="true"><Link to="/saibamais">Saiba Mais</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>          

  )
}

export default Navbar