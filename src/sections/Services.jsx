const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className='bg-white text-black'>
        <div className="main-container pb-8 lg:pb-12">
          <h3>Serviços em Detalhes</h3>
        </div>
      </div>
      {/* Services List */}
      <div className='relative services-all'>
        
        <div className='services-details primary bg-black text-white py-10 md-py-16 pt-16 lg:pt-14 pb-[83vh] sticky top-4'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
            {/* left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>01</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Desenvolvimento Web <br />& UI/UX
              </h2>
            </div>
            {/* right side */}
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Criação de interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript e React.
                Construo páginas rápidas, bem estruturadas e adaptadas para diferentes dispositivos, sempre focando na performance e na melhor experiência para o usuário.</p>
            </div>
          </div>
        </div>

        <div className='services-details bg-[#E9E9F0] text-black pt-16 lg:pt-18 pb-[56vh] sticky top-1/3'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
            {/* left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>02</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Integrações <br />& APIs Restful
              </h2>
            </div>
            {/* right side */}
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Desenvolvimento de aplicações com consumo e integração de APIs Restful, garantindo comunicação eficiente entre sistemas.
                Trabalho com manipulação de dados em JSON e criação de funcionalidades dinâmicas para entregar soluções práticas e escaláveis.</p>
            </div>
          </div>
        </div>

        <div className='services-details bg-white text-black py-16 lg:py-20 pb-[40vh] sticky top-2/3'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
            {/* left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>03</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Banco de Dados <br />& Análise de Sistemas
              </h2>
            </div>
            {/* right side */}
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Experiência em modelagem, consultas e gerenciamento de bancos de dados para dar suporte a aplicações robustas.
                Unindo a visão de analista de sistemas ao foco no desenvolvimento, consigo estruturar soluções que atendem tanto ao lado técnico quanto às necessidades do negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services






/*

DAQUI PRA BAIXO, É A VERSÃO MAIS ANTIGA, ANTES DE REALIZAR UNS AJUSTE NESSA SESSÃO
TEVE ALGUNS COMENTARIOS QUE PRECISEI TIRAR POIS O COMETARIO RAIZ NÃO ESTAVA PEGANDO NO COMENTARIO GERAL

import React from 'react'

const Services = () => {
  return (
    <>
      
      <div className='bg-white text-black'>
        <div className="main-container pb-8 lg:pb-12">
          <h3>Serviços em Detalhes</h3>
        </div>
      </div>
      
      <div className='relative'>
        <div className='bg-black text-white pt-16 lg:pt-14 pb-[35rem] sm:pb-[40rem] sticky top-4'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
            
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>01</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Desenvolvimento Web <br />& UI/UX
              </h2>
            </div>
            
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Criação de interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript e React.
                Construo páginas rápidas, bem estruturadas e adaptadas para diferentes dispositivos, sempre focando na performance e na melhor experiência para o usuário.</p>
            </div>
          </div>
        </div>

        <div className='bg-[#E9E9F0] text-black pt-16 lg:pt-18 pb-[22rem] sm:pb-[24rem] sticky top-1/3'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
           
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>02</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Integrações <br />& APIs Restful
              </h2>
            </div>
            
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Desenvolvimento de aplicações com consumo e integração de APIs Restful, garantindo comunicação eficiente entre sistemas.
                Trabalho com manipulação de dados em JSON e criação de funcionalidades dinâmicas para entregar soluções práticas e escaláveis.</p>
            </div>
          </div>
        </div>

        <div className='bg-white text-black py-16 lg:py-20 sticky top-2/3'>
          <div className='main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start'>
          
            <div className='flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>03</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold leading-[1]'>
                Banco de Dados <br />& Análise de Sistemas
              </h2>
            </div>
            
            <div className='flex items-center'>
              <p className='text-lg lg:text-xl leading-relaxed'>Experiência em modelagem, consultas e gerenciamento de bancos de dados para dar suporte a aplicações robustas.
                Unindo a visão de analista de sistemas ao foco no desenvolvimento, consigo estruturar soluções que atendem tanto ao lado técnico quanto às necessidades do negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services


*/