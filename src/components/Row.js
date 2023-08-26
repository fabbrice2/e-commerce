import React from 'react'
import '../css/input.css';
import '../css/output.css';
import '../css/row.css'
import Header from './Header';
import Footer from './Footer';

function Row() {
  return (
    <div className='row'>
        <Header/>
        <div className="content_row">
            <h1 className='text-4xl md:text-5xl lg:text-6xl'>Plantes et pots <br/>pour votre maison</h1>
            <button className='sm:px-12 py-4 px-8 bg-[#A8A6A1] duration-300'><a href="/buypage">Acheter maintenant</a></button>
        </div>
        <div className="wrap bg-[#38383B] text-white flex flex-col gap-20 px-12">
          <h1 className='text-center text-4xl md:text-5xl lg:text-6xl mt-[100px]'>Coups de cœur des fans</h1>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            <li className='flex flex-col items-center'>
              <img className='max-w-full h-auto' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206485-RP4HTJEHBU2FPAV03ZQI/image.jpg?format=750w" alt="img" />
              <h2 className='mt-2 mb-[50px] text-3xl'>Petites plantes</h2>
            </li>
            <li className='flex flex-col items-center'>
              <img className='max-w-full h-auto' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206501-HNIB958SZIFQ4H8LWOHB/image.jpg?format=750w" alt="img" />
              <h2 className='mt-2 mb-[50px] text-3xl'>Plantes plus grandes</h2>
            </li>
            <li className='flex flex-col items-center'>
              <img className='max-w-full h-auto' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206485-RP4HTJEHBU2FPAV03ZQI/image.jpg?format=750w" alt="img" />
              <h2 className='mt-2 mb-[50px] text-3xl'>Peu d’entretien</h2>
            </li>
          </ul>
        </div>
        <div className="wrapper">
        </div>
        <div className="banner bg-[#A8A6A1] text-white px-12 flex flex-col gap-20 py-20">
          <h1 className='text-center text-4xl md:text-5xl lg:text-6xl'>Le journal</h1>
          <ul className='flex justify-center md:gap-4 gap-10 grid grid-cols-1 md:grid-cols-2'>
            <li className='flex flex-col items-center gap-6'>
              <img className='max-w-full h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206550-QBJMNDRCJ6IPPXL0WNY6/plant_2_optimized.gif?format=1500w" alt="" />
              <h2 className='text-4xl text-center'>Vous cherchez des fleurs?</h2>
              <p className='text-center text-l'>Les plantes à fleurs sont étonnantes, mais elles ont besoin d’un peu plus d’attention que les autres. Apprenez comment prendre soin d’elles.</p>
              <button className='sm:px-12 py-4 px-8 bg-white text-[#A8A6A1] duration-300'>En savoir plus</button>
            </li>
            <li className='flex flex-col items-center gap-6 md'>
              <img className='max-w-full h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607206567-B3PW8IAG7BZF78B9X0IF/plant_1_optimized.gif?format=1500w" alt="" />
              <h2 className='text-4xl text-center'>Vous cherchez des plantes grasses?</h2>
              <p className='text-center text-l'>Si vous avez un rebord de fenêtre ensoleillé, les succulentes (ou plantes grasses) sont faites pour vous. Elles sont belles, résistantes et faciles d’entretien.</p>
              <button className='sm:px-12 py-4 px-8 bg-white text-[#A8A6A1] duration-300'>En savoir plus</button>
            </li>
          </ul>
        </div>
        <div className="newsletter flex items-center justify-center">
          <div className="newslettercontent text-white flex flex-col gap-5">
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl'>Elles grandissent si vite.</h1>
            <p className='text-center text-l'>Assurez-vous de ne rien rater. Inscrivez-vous pour recevoir les dernières informations.</p>
            <form action="" class="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-1">
              <input type="email" name="email" id="email" placeholder="Adresse E-mail" class="mb-4 sm:mb-0 sm:mr-4 px-8 py-4 border border-gray-300 focus:outline-none focus:ring focus:border-black transition duration-300 w-[250px] sm:w-[400px]" />
              <button class="px-8 py-4 bg-[#A8A6A1] text-white  focus:outline-none transition duration-300">S'inscrire</button>
            </form>
          </div>
        </div>
        <div className="bannerbox grid grid-cols-1 md:grid-cols-2 px-12 py-[80px] bg-[#A8A6A1] flex flex-col items-center justify-between gap-20">
          <div className="backgroundsection">
          </div>
          <div className="text-white flex flex-col items-start gap-6">
            <h1 className='text-xl md:text-2xl lg:text-3xl'>Offrez de la verdure</h1>
            <p>Les plantes font un cadeau aussi attentionné que les fleurs et durent beaucoup plus longtemps. Avec une carte-cadeau, vous pouvez égayer la maison, le bureau ou la chambre d’une personne qui se fera plaisir avec la plante en pot de son choix. Nous en avons de toutes sortes et nous vous les enverrons gratuitement !</p>
            <button className="px-8 py-4 bg-white text-[#A8A6A1] hover:text-gray-800  focus:outline-none transition duration-300">Acheter une carte-cadeau</button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Row