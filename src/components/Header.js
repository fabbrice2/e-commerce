import React, { useEffect, useState } from 'react'
import '../css/input.css';
import '../css/output.css';
import '../css/header.css'
// import { Link } from "react-router-dom";

function Header() {

  const [acheter, setAcheter] = useState(false);
  const [histoire, setHistoire] = useState(false);
  const [journal, setJournal] = useState(false);
  const [contact, setContact] = useState(false);
  const [count, setCount] =  useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const acheterClick = () => {

    setAcheter(!acheter);
  };
  
  const histoireClick = () => {

    setHistoire(!histoire);
  };
  
  const journalClick = () => {

    setJournal(!journal);
  };
  
  const contactClick = () => {

    setContact(!contact);
  };
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setBackgroundColor('#000000');
      } else {
        setBackgroundColor('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
    <div style={{ background: backgroundColor }} className='header flex justify-between duration-300  items-center px-12 fixed w-full text-white'>
      <div className="logo text-3xl font-bold"><a href='/'>Fabrice</a></div>
      <div className="menu">
        <ul className='flex gap-4 text-l'>
          <a href="/buypage" onClick={acheterClick}>
            <li className='cursor-pointer' style={{ textDecoration: acheter ? 'underline' : 'none' }}>Acheter</li>
          </a>
          <a href="/history" onClick={histoireClick}>
            <li className='cursor-pointer' style={{ textDecoration: histoire ? 'underline' : 'none' }}>Notre histoire</li>
          </a>
          <a href="/journal" onClick={journalClick}>
            <li className='cursor-pointer' style={{ textDecoration: journal ? 'underline' : 'none' }}>Journal</li>
          </a>
          <a href="/contact" onClick={contactClick}>
            <li className='cursor-pointer' style={{ textDecoration: contact ? 'underline' : 'none' }}>Contact</li>
          </a>
        </ul>
      </div>
      <div className="panier">
        <ul>
          <a href="#">
            <li className='flex items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg><span>{count}</span></li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Header