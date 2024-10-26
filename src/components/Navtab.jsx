import React from 'react'
import './Navtab.css'
import alunos from '../assets/alunos.jpg'
import professores from '../assets/professores.webp'


const Navtab = () => {
  return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-primary mb-3 text-center'>Saiba Mais <ion-icon name="create-outline"></ion-icon></h2>
                </div>
            </div>  
            <div className='row'>
                <div className='col-12'>
                <nav>        
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <button className="nav-link active fs-7 me-2 me-md-4" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Disciplinas</button>
                        
                        <button className="nav-link fs-7 me-2 me-md-4" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Metodologia</button>
                        
                        <button className="nav-link fs-7 me-2 me-md-4" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Saiba Mais</button>
                    </div>
                </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                <div className='col-12 col-lg-4'>
                                    <h3 className='fs-7 p-3'>O Curso</h3>
                                    <p className='p-3'>Promover o desenvolvimento do aluno por meio de ações que articulem e mobilizem conhecimentos, habilidades, valores e atitudes de forma potencialmente criativa e que estimule o aprimoramento contínuo.
                                    Estimular, por meio de situações de aprendizagens, atitudes empreendedoras, sustentáveis e colaborativas nos alunos.</p>
                                </div>
                                <div className='col-12 col-lg-4'>
                                    <h3 className='fs-7 p-3'>Diferencias</h3>
                                    <p className='p-3'>Formar profissionais com competências para atuar e intervir em seu campo de trabalho, com foco em resultados.Promover uma avaliação processual e formativa com base em indicadores das competências, que possibilitem a todos os envolvidos no processo educativo a verificação da aprendizagem.</p>
                                </div>
                                <div className='col-12 col-lg-4'>
                                    <h3 className='fs-7 p-3'>Formação</h3>
                                    <p className='p-3'>O Técnico em Desenvolvimento de Sistemas será habilitado para:
                                    Desenvolver sistemas computacionais utilizando ambiente de desenvolvimento.Dimensionar requisitos e funcionalidades do sistema. 
                                    Realizar testes funcionais de programas de computador e aplicativos.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <h3 className='fs-7 p-3'>Metodologia</h3>
                                    
                                    <p className='p-3'>Para favorecer a construção do conhecimento a partir de vivências e situações reais, o processo de ensino e aprendizagem terá por base a utilização de problemas, com integração de diversas unidades curriculares e inicia a partir de situações e de objetivos elaborados antecipadamente para desencadear o processo de construção dos saberes, pela utilização de conhecimentos prévios dos estudantes.</p>                            
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <img className='img-fluid p-3' src={alunos} alt="" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <h3 className='p-3'>Formação</h3>
                                    <p className='p-3'>Certificados: O Curso Técnico possui três certificações intermediárias, uma para
                                    cada um dos anos, sendo elas: Programador de Sistemas (1° ano), Desenvolvedor
                                    Front-End (2° ano) e Desenvolvedor Back-End (3° ano).
                                    Diploma: Ao concluir com sucesso o Curso Técnico em Desenvolvimento de Sistemas
                                    conforme organização curricular aprovada, o aluno receberá o Diploma de Técnico
                                    em Desenvolvimento de Sistemas.</p>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <img className='img-fluid p-3' src={professores} alt="" />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
  )
}

export default Navtab