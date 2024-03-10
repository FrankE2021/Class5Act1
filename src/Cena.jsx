import React from 'react'

function Cena({nombre,vacasComidas, reinado}) {
    const ruta="http://www.html6.es/img/rey_"
    const imagen=`${ruta}${nombre.toLowerCase()}.png`;

  return (
    <>
        <div className="rey">
            <h1><span className='redname'>{nombre.toUpperCase()} </span>ha comido {vacasComidas} vacas en sus {reinado} años de reinado.</h1>
            <img src={imagen}/>
        </div>
    </>
  )
}

export default Cena
