import React from 'react'
import sistemas from '../assets/sistemas.jpeg'

const Sobre = () => {
  return (
  <>
    <section className='text-primary mx-5'>
      <h1 className='d-flex align-items-center'>Conheça nosso curso <ion-icon name="newspaper-outline"></ion-icon><span className='p-2 d-flex align-itens-center'></span></h1>
    </section>

    <section className='row p-3'>
      <div className='col-12 col-lg-6'>
          <p className='mx-3 p-3'>Projeções sobre o futuro do trabalho modeladas pela consultoria McKinsey
              apontam que 30 a 40% de toda a força de trabalho necessitará incrementar
              significativamente suas habilidades ou buscar novas ocupações até 2030. Uma nova
              realidade tecnológica ubíqua exige profissionais altamente qualificados, o que já
              reflete na busca por mão-de-obra na percepção de 81% dos líderes de empresas,
              segundo estudo da consultoria de recrutamento Robert Half.</p>
      </div>   
      <div className='col-12 col-lg-6 d-flex justify-content-center'>
          <img className='img-fluid' src={sistemas} alt="" />
      </div>   
      <section className='row p-3'>
      <h4 className='mx-3 p-3'>Habilitação Profissional</h4>
      <p className='mx-3 p-3'>Desenvolvimento de Sistemas<strong> Eixo Tecnológico:</strong> Informação e Comunicação
      <strong> Forma:</strong> Integrado
        Carga Horária Total do Curso: 3.298 horas
        <strong> Regime de Funcionamento:</strong> de 2ª a 6ª feira, no(s) período(s): (manhã e tarde) e 2ª a Sábado, no período: (noturno). (Para o ano de 2022 não será ofertado no período noturno)
        <strong> Regime de Matrícula:</strong> Anual        
        <strong> Período de Integralização do Curso:</strong> Mínimo de 03 (três) anos letivos
        <strong> Requisitos de Acesso:</strong> Conclusão do Ensino Fundamental
        <strong> Modalidade de Oferta:</strong> Presencial com até 20% não presencial </p>
      </section>
    </section>

  </>
  )
}

export default Sobre