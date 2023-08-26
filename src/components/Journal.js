import React from 'react';
import '../css/input.css';
import '../css/output.css';
import '../css/journal.css';
import Header from './Header';
import Footer from './Footer';


function Journal() {
  return (
    <div className='journal bg-[#38383B] text-white'>
        <Header />
        <ul className='flex justify-center md:gap-4 gap-10 grid grid-cols-1 md:grid-cols-2 pt-[25vh] p-12'>
            <li className='flex flex-col items-center gap-6'>
              <img className='max-w-full h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206550-QBJMNDRCJ6IPPXL0WNY6/plant_2_optimized.gif?format=1500w" alt="" />
              <span>06/06/2019</span>
              <h2 className='text-4xl text-center'>Vous cherchez des fleurs?</h2>
              <a className='underline text-[#A8A6A1]' href='#'>Lire la suite</a>
            </li>
            <li className='flex flex-col items-center gap-6 md'>
              <img className='max-w-full h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206567-B3PW8IAG7BZF78B9X0IF/plant_1_optimized.gif?format=1500w" alt="" />
              <span>03/06/2019</span>
              <h2 className='text-4xl text-center'>Vous cherchez des plantes grasses?</h2>
              <a className='underline text-[#A8A6A1]' href='#'>Lire la suite</a>
            </li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Journal