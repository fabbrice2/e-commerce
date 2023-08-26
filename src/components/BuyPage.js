import React from 'react';
import '../css/input.css';
import '../css/output.css';
import '../css/buypage.css'
import Header from './Header';

function BuyPage() {
  return (
    <div className='buypage bg-[#38383B] text-white'>
        <Header />
        <div className="content flex flex-col gap-10">
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl'>Nos plantes</h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corrupti quas eos voluptate enim at ipsum magnam nesciunt aut ratione?</p>
        </div>
        <div className="plant px-12 flex justify-center">
          <ul className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <li className='flex flex-col gap-2 text-center text-xl'>
              <img className='duration-400 cursor-pointer' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186003-UJWAV62HLPUFGTAJGVRE/Ecomm_02_Lily_004.jpg?format=500w" alt="" />
              <h2>Lys</h2>
              <span>A partir de 20,00 €</span>
            </li>
            <li className='flex flex-col gap-2 text-center text-xl'>
              <img className='duration-400 cursor-pointer' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186463-551OLFX1L1Z7G6BHWN7R/Ecomm_10_Pencil_002.jpg?format=500w" alt="" />
              <h2>Plante crayon</h2>
              <span>A partir de 12,00 €</span>
            </li>
            <li className='flex flex-col gap-2 text-center text-xl'>
              <img className='duration-400 cursor-pointer' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607185969-AONA6Y9T2IT61T8GOFVH/Ecomm_05_Alocasia_008.jpg?format=500w" alt="" />
              <h2>Alocasia</h2>
              <span>A partir de 15,00 €</span>
            </li>
            <li className='flex flex-col gap-2 text-center text-xl'>
              <img className='duration-400 cursor-pointer' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186326-KKHVWLNXWPW90NKDMYUV/Ecomm_17_Snake_001.jpg?format=500w" alt="" />
              <h2>Sansevieria</h2>
              <span>A partir de 12,00 €</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default BuyPage