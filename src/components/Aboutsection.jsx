import React from 'react'
import image1 from '../assets/img-1.webp'
import './Aboutsection.css'
import image2 from '../assets/vr-1.webp'
import image3 from '../assets/vr-2.webp'

const Aboutsection = () => {
  return (
    <section className='aboutSection container-fluid px-5'>
    <div className='row'>
        <div className='col-12 col-lg-6d'>                
            <div className='text-center text-md-start'>
                <h2 className='text-primary py-3 d-flex align-items-center'>Sobre o TDS <ion-icon name="shield-checkmark-outline"></ion-icon></h2>
                <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Mercado de Trabalho
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>Sobre o mercado de trabalho</strong> No contexto do mundo do trabalho e das especificidades da área da tecnologia e da informática, este currículo atende uma necessidade real de demanda de mercado
        no segmento de informática nas mais diversas atuações deste profissional. Conforme
        dados apontados pela Associação Brasileira de Empresas de Tecnologia da Informação e Comunicação (Brasscom), em 2019 a área de TIC empregava 1,56 milhões de profissionais, acumulando o crescimento do setor 4.1%. No mundo, as profissões     relacionadas a essa área crescerão 33% até 2022, segundo dados do
        World Economic Forum.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Tecnologia da Informação
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Sobre a Tecnologia da Informação</strong> Em Tecnologia da Informação, as especialidades com maior demanda de contratação estão ligadas ao desenvolvimento de software (23% das vagas). O relatório do LinkedIn "Profissões Emergentes 2020" coloca entre as quinze profissões emergentes no Brasil nove diretamente relacionadas à TI, e a cadeia produtiva de TI como um dos três setores que mais demandam em 11 delas. Uma das profissões é "Programador(a) de JavaScript", na 8ª posição com 72% de crescimento anual. O Fórum Econômico Mundial (2018) 5 coloca a programação como uma habilidade emergente e os desenvolvedores de software como um dos papéis profissionais emergentes. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        A indústria de softwares
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>Sobre a indústria de softwares</strong> Segundo o estudo "Mercado Brasileiro de Software: panorama e tendências, 2019" da ABES - Associação Brasileira das Empresas de Software, 21,1% do software utilizado é desenvolvido no país representando um mercado de US$ 2,2 bilhões. Entre as empresas de TIC, 27,3% (5294 empresas) se enquadram no setor "software e serviços: desenvolvimento e produção" sendo 95% micro e pequenas empresas (com menos de 10, ou com 10 a 99 funcionários, respectivamente). O segmento de desenvolvimento representa 44,9% e apresentou crescimento de 12,7% entre 2017 e 2018.
      </div>
    </div>
  </div>
</div>
            </div>
        </div>            
    </div>
    <div className='container-fluid p-0 m-0'>
        <div className='row'>
            <div className='col-12'>
                <h2 className='text-primary mb-3 text-center pt-5'>Tecnologias WEB     <ion-icon name="flag-outline"></ion-icon></h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-lg-4 p-2 m-0'>
                <div className='card p-3 shadow-sm'>
                <h3 className='fw-bold'>Front-End</h3>
                <img className='img-fluid' src={image1} alt="" />                    
                <p className='card-text pt-3'>
                De forma geral, o Front-end compreende a parte visual de sites e aplicações. Ou seja, a área das páginas em que as pessoas podem interagir.
                Isso significa que o Front-end se relaciona com as partes dos sites que mais se aproximam da pessoa usuária.
                Sendo assim, as pessoas que trabalham com Front-end são responsáveis por desenvolver uma interface gráfica através de tecnologias bases da Web: HTML, CSS e JavaScript.
                </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 p-2 m-0'>
                <div className='card p-3 shadow-sm blue-bg'>
                <h3 className='fw-bold'>Sistemas Web</h3>
                <img className='img-fluid' src={image2} alt="" />                    
                <p className='card-text pt-3'>
                Por causa dessas atribuições, é bastante comum que as pessoas confundam as funções de Dev Front-end com as atividades de designer.
                É provável que essa confusão seja principalmente pela função de Webmaster, que existia antigamente e fazia tudo isso e mais um pouco.
                Hoje em dia, as atividades de designer com foco em experiência da pessoa usuária compreendem usar alguma ferramenta visual (Photoshop ou Sketch, por exemplo) para desenhar as interfaces como deveriam ser.                
                </p>
                </div>
            </div>
            <div className='col-12 col-lg-4 p-2 m-0'>
                <div className='card p-3 shadow-sm'>
                <h3 className='fw-bold'>Back-End</h3>
                <img className='img-fluid' src={image3} alt="" />                    
                <p className='card-text pt-3'>
                Como o próprio nome sugere, o Back-end compreende tudo aquilo que tem por trás de uma aplicação.
                Pode ficar meio abstrato num primeiro momento, mas pense na seguinte situação: para você usar o Instagram todos os diasa, os dados (as informações) do seu perfil, de suas amizades e de suas publicações precisam estar salvos e processados em um banco de dados.
                </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutsection