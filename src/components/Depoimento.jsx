import React from 'react'

const Depoimento = ({nome,quemsou,depoimento}) => {
  return (    
        <div className='col-12 col-lg-6'>
          <div className='card p-3 shadow-sm'>
            <p className='fs-4 fw-bold'>{nome}</p>
            <p className='fs-5'>{quemsou}</p>
            <p className='fs-6'>{depoimento}</p>
          </div>
        </div>                  
  )
}

export default Depoimento