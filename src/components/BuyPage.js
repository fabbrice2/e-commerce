import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/input.css';
import '../css/output.css';
import '../css/buypage.css'

function BuyPage() {
  const plantData = [
    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186003-UJWAV62HLPUFGTAJGVRE/Ecomm_02_Lily_004.jpg?format=500w',
      name: 'Lys',
      price: '20,00€'
    },
                   
    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186463-551OLFX1L1Z7G6BHWN7R/Ecomm_10_Pencil_002.jpg?format=500w',
      name: 'Plante crayon',
      price: '12,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607185969-AONA6Y9T2IT61T8GOFVH/Ecomm_05_Alocasia_008.jpg?format=500w',
      name: 'Alocasia',
      price: '15,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186326-KKHVWLNXWPW90NKDMYUV/Ecomm_17_Snake_001.jpg?format=500w',
      name: 'Sansevieria',
      price: '12,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186003-UJWAV62HLPUFGTAJGVRE/Ecomm_02_Lily_004.jpg?format=500',
      name: 'Orchidée',
      price: '30,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186463-551OLFX1L1Z7G6BHWN7R/Ecomm_10_Pencil_002.jpg?format=500',
      name: 'Calathea rose',
      price: '20,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607185969-AONA6Y9T2IT61T8GOFVH/Ecomm_05_Alocasia_008.jpg?format=500',
      name: 'Adiantum',
      price: '10,00€',
    },
 
    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186326-KKHVWLNXWPW90NKDMYUV/Ecomm_17_Snake_001.jpg?format=500',
      name: 'Cactus',
      price: '50,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186003-UJWAV62HLPUFGTAJGVRE/Ecomm_02_Lily_004.jpg?format=500',
      name: 'Fougère',
      price: '25,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607186463-551OLFX1L1Z7G6BHWN7R/Ecomm_10_Pencil_002.jpg?format=500',
      name: 'Palmier',
      price: '20,00€',
    },

    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607185969-AONA6Y9T2IT61T8GOFVH/Ecomm_05_Alocasia_008.jpg?format=500',
      name: 'Carte cadeau',
      price: '25,00€',
    },

  ];

  return (
    <>
    <Header/>
    <div className='buypage bg-[#38383B] text-white'>
      <div className="content flex flex-col gap-10">
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl'>Nos plantes</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.</p>
      </div>
      <div className="plant px-12 flex flex-col justify-center gap-10">
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {plantData.map((plant, index) => (
            <li key={index} className='flex flex-col gap-2 text-center text-xl'>
              <Link to={`/achat?imageSrc=${encodeURIComponent(plant.imageSrc)}&name=${encodeURIComponent(plant.name)}&price=${encodeURIComponent(plant.price)}`}>
                <img src={plant.imageSrc} alt="" />
              </Link>
              <h2>{plant.name}</h2>
              <span>A partir de {plant.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default BuyPage;
