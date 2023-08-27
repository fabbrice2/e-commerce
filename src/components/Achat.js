import React from 'react';
import '../css/input.css';
import '../css/output.css';
import '../css/achat.css'
import { useLocation } from 'react-router-dom';
import Header from './Header';

function Achat() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const imageSrc = searchParams.get('imageSrc');
    const name = searchParams.get('name');
    const price = searchParams.get('price');

    return (
      <div className='achat bg-[#38383B]'>
        <Header />
            <div className="product text-white p-20 grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="img">
                    <h1 className='navigate flex items-center mb-4'><a href="/buypage">Boutique</a><span class="material-icons">navigate_next</span><a href="">{decodeURIComponent(name)}</a></h1>
                    <img className='max-w-full h-auto' src={decodeURIComponent(imageSrc)} alt={name} />
                </div>
                <div className="productinfo flex flex-col items-center gap-10">
                    <h2 className='text-center text-xl md:text-3xl lg:text-4xl '>{decodeURIComponent(name)}</h2>
                    <span>{decodeURIComponent(price)}</span>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex flex-col gap-3 items-center selection">
                        <label htmlFor="taille">Taille:</label>
                        <select name="pets" id="pet-select" className='border-2 bg-[#38383B] p-3'>
                        <option value="">Selectionnez la taille</option>
                        <option value="dog">Petit</option>
                        <option value="cat">Moyen</option>
                        <option value="hamster">Grand</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3 items-center quantity">
                        <label htmlFor="quantity">Quantité:</label>
                        <input type="number" name="" id="" placeholder='1' className='bg-[#38383B] border-2 p-2'/>
                    </div>
                    <button onClick={Header.incrementCount} className='sm:px-12 py-4 px-8 bg-[#A8A6A1] duration-300'>Ajouter au panier</button>
                </div>
            </div>
      </div>
    );
}

export default Achat;
