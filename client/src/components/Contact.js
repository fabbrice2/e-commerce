import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../css/input.css';
import '../css/output.css';
import '../css/contact.css';
import Header from './Header';
import Footer from './Footer';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '100vh',
        borderRadius: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        backdropFilter: 'none',
        zIndex: 1000, 
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
  };


function Contact() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <div className='contact text-white'>
        <Header/>
        <div className="sectionbg p-12 flex flex-col h-screen items-center justify-center gap-5">
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl'>Nous contacter</h1>
            <p className='text-center'>Le texte qui suit est un élement de substitution connu sous le nom de « lorem ipsum ». Il s’agit d’un mélange de mots latins utilisé par les designers pour imiter un contenu réel. Lorem ipsum dolor sit amet nullam.</p>
            <button onClick={openModal} className='sm:px-12 py-4 px-8 bg-white text-[#A8A6A1] duration-300'>Nous contacter</button>  
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName="custom-overlay"
            >
            <div className="form flex flex-col justify-between gap-[30px] bg-white h-sreen px-10 mdpx-2">
                <header className='mb-5'>
                    <ul className='flex items-center justify-between'>
                        <li className='text-center text-l md:text-xl lg:text-2xl'>Nous contacter</li>
                        <li onClick={closeModal} className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </li>
                    </ul>
                </header>
                <form action="" className='flex flex-col gap-5'>
                    <div className="name flex gap-3">
                        <div className="flex flex-col gap-1 firstname">
                            <label className='text-xs' htmlFor="firstname">Prenom</label>
                            <input className='focus:outline-none focus:border-3 p-2 border border-black' type="text" name="firstname" />
                        </div>
                        <div className="flex flex-col gap-1 lastname">
                            <label className='text-xs' htmlFor="lastname">Nom de famille <span className='text-gray-400'>   (Obligatoire)</span></label>
                            <input className='focus:outline-none focus:border-3 p-2 border border-black' type="text" name="lasttname" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 email">
                        <label className='text-xs' htmlFor="email">E-mail <span className='text-gray-400'>  (Obligatoire)</span></label>
                        <input className='flex-1 focus:outline-none focus:border-3 p-2 border border-black' type="email" name="email" />
                    </div>
                    <div className="flex flex-col gap-1 message">
                        <label className='text-xs' htmlFor="message">Message<span className='text-gray-400'>  (Obligatoire)</span></label>
                        <textarea className='p-2 focus:outline-none focus:border-3 border border-black' name="message"></textarea>
                    </div>
                    <button className='sm:px-12 py-3 px-5 bg-black text-white duration-300'>Nous contacter</button>
                </form>
            </div>
            </Modal>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact