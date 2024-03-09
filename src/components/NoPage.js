import React from 'react';
import '../css/input.css';
import '../css/output.css';
import '../css/noPage.css'
import Header from './Header';
import Footer from './Footer';

function NoPage() {
  return (
    <div className='nopage bg-[#38383B]'>
      <Header/>
      <div className="error px-12 py-20 text-white flex flex-col gap-7">
        <h1>Nous n'avons pas pu trouver la page que vous cherchez. Soit :</h1>
        <ul>
          <li className='list-disc'>Il y a une erreur dans l'URL que vous avez saisie dans votre navigateur web. Veuillez vérifier l'URL et essayer de nouveau.</li>
          <li className='list-disc'>La page que vous cherchez a été déplacée ou supprimée.</li>
        </ul>
        <h2>Vous pouvez revenir à la page d'accueil en <a className='text-[#A8A6A1]' href="/">cliquant ici</a>, ou vous pouvez <a className='text-[#A8A6A1]' href="/buyPage">cliquez ici</a> pour un achat.</h2>
      </div>
      <Footer/>
    </div>
  )
}

export default NoPage