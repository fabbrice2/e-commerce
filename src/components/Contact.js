import React, { useState } from 'react';
import '../css/input.css';
import '../css/output.css';
import '../css/contact.css';
import Header from './Header';
import Footer from './Footer';


function Contact() {

  
  return (
    <div className='contact text-white'>
        <Header/>
        <div className="sectionbg p-12 flex flex-col h-screen items-center justify-center gap-5">
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl'>Nous contacter</h1>
            <p className='text-center'>Le texte qui suit est un élement de substitution connu sous le nom de « lorem ipsum ». Il s’agit d’un mélange de mots latins utilisé par les designers pour imiter un contenu réel. Lorem ipsum dolor sit amet nullam.</p>
            <button className='sm:px-12 py-4 px-8 bg-white text-[#A8A6A1] duration-300'>Nous contacter</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact