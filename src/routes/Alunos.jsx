import React from 'react'
import Depoimento from '../components/Depoimento'
import {depoimentos} from '../json/depoimentos.json'
import './Alunos.css'
import tds1 from '../assets/tds1.jpg'
import tds2 from '../assets/tds2.jpg'
import tds3 from '../assets/tds3.jpg'
import tds4 from '../assets/tds4.jpg'
import tds5 from '../assets/tds5.jpg'
import tds6 from '../assets/tds6.jpg'


const Alunos = () => {
  return (
    <>
    <section className='text-primary mx-5'>
      <h1 className='d-flex align-items-center'>Conheça nossos alunos <span className='p-2 d-flex align-itens-center'><ion-icon name="person-outline"></ion-icon></span></h1>
    </section>
    
    <section className='row col-lg-6 container-fluid m-auto py-3'>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={tds1} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={tds2} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={tds3} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={tds4} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={tds5} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={tds6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>       
    
    <section className='text-primary mx-5'>
      <h1 className='d-flex align-items-center'>Mais sobre nossa formação <span className='p-2 d-flex align-itens-center'><ion-icon name="people-outline"></ion-icon></span></h1>
    </section>
    <section className='row p-3'>
      <h4 className='mx-3 p-3'>Programador de sistemas (1° ano)</h4>
      <p className='mx-3 p-3'>É o profissional que colabora no desenvolvimento de programas e auxilia na análise de sistemas e modelagem de bancos de dados. É responsável pela operação de sistemas computacionais, realizando versionamento no desenvolvimento de programas. Implementa algoritmos em linguagem de programação, utilizando ambientes de desenvolvimento de acordo com as necessidades e as ferramentas necessárias.
      Esse profissional atua em empresas dos mais diferentes setores e segmentos e, ainda, de forma empreendedora, como autônomo, prestando serviços às empresas.</p>

      <h4 className='mx-3 p-3'>Desenvolvedor Front-End (2° ano)</h4>
      <p className='mx-3 p-3'>O profissional Desenvolvedor Front-End é responsável pela codificação de toda a interface visual de um site dinâmico. Suas atribuições envolvem desde o projeto, construção e manutenção do layout do produto digital para internet, como a disposição de seus elementos multimídias e a interação de dados, proporcionando melhor interatividade entre os elementos da aplicação, por meio de tecnologias e dos princípios de acessibilidade, usabilidade e responsividade.
      Esse profissional atua em empresas dos mais diferentes setores e segmentos e, ainda, de forma empreendedora, como autônomo, prestando serviços às organizações que utilizam sua comunicação por meio de sites, promovendo a experiência do usuário a partir da interface gráfica. Relaciona-se com equipes de desenvolvimento, outros profissionais de TI, bem como clientes e usuários da aplicação.</p>

      <h4 className='mx-3 p-3'>Desenvolvedor Back-end (3° ano)</h4>
      <p className='mx-3 p-3'>O profissional Desenvolvedor Back-End é responsável pelo desenvolvimento de sites utilizando linguagens de programação. Dentre suas principais atribuições estão a elaboração de projeto, a estabilidade e a integração com banco de dados, webservices, aplicações Front-End e com outros sistemas, além do desenvolvimento e manutenção das regras de negócios de aplicações. Realiza, ainda, a documentação e testes durante todo o processo e o suporte técnico aos clientes internos e externos.</p>
    </section>
    </>
  )
}

export default Alunos