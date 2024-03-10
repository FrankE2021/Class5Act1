import React from 'react'
import { useState } from 'react';
import Cena from "./Cena";
import './App.css';

const App = () => {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]

  return (
    <>
    <h1 className='titulo'>Actividad 1:</h1>
    <div className="cajaCentral">
      <Cena nombre={reyes[0].nombre} vacasComidas={reyes[0].vacasComidas} reinado={reyes[0].reinado}/>

      <Cena nombre={reyes[1].nombre} vacasComidas={reyes[1].vacasComidas} reinado={reyes[1].reinado}/>

      <Cena nombre={reyes[2].nombre} vacasComidas={reyes[2].vacasComidas} reinado={reyes[2].reinado}/> 

      <Cena nombre={reyes[3].nombre} vacasComidas={reyes[3].vacasComidas} reinado={reyes[3].reinado}/>

      <Cena nombre={reyes[4].nombre} vacasComidas={reyes[4].vacasComidas} reinado={reyes[4].reinado}/>

      <Cena nombre={reyes[5].nombre} vacasComidas={reyes[5].vacasComidas} reinado={reyes[5].reinado}/>

      <Cena nombre={reyes[6].nombre} vacasComidas={reyes[6].vacasComidas} reinado={reyes[6].reinado}/>

    </div>
    </>
  )
}

export default App

