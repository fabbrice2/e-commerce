import React from 'react'
import Header from './Header'
import '../css/input.css';
import '../css/output.css';
import '../css/history.css';
import Footer from './Footer';

function History() {
  return (
    <div className='history bg-[#38383B] text-white'>
        <Header/>
        <div className="contenthistory text-white flex justify-center items-center">
            <h1 className='text-center text-4xl md:text-5xl lg:text-6xl'>Notre histoire</h1>
        </div>
        <div className="historycomponent flex flex-col gap-[70px] lg:px-[200px] md:[100px] px-[30px]">
            <h1 className='text-center text-center text-xl md:text-2xl lg:text-3xl'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</h1>
            <ul>
                <li><img className='max-w-full h-auto object-cover' src="https://images.squarespace-cdn.com/content/v1/62bdd1cc7fc2784fd9195c81/1656607200802-14MOGW8NB8NPT2SGWKLU/plant-textures-2.jpg?format=1500w" alt="" /></li>
                <li className='text-sm sm:w-[350px] w-full'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam</li>
            </ul>
            <p className='md:px-[130px] mb-[60px]'>Le texte qui suit est un élément de substitution connu sous le nom de « lorem ipsum ». Il s’agit d’un mélange de mots latins utilisé par les designers pour imiter un contenu réel. Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo, accumsan auctor orci lectus ac ipsum. Proin porta nisl sem, ac suscipit lorem dignissim et. Curabitur euismod nec augue vitae dictum. Nam mattis, massa quis consequat molestie, erat justo vulputate tortor, a sollicitudin turpis felis eget risus. Aliquam viverra urna felis, eu ornare enim consectetur sed. Morbi vitae ultrices velit. Sed molestie consectetur metus. Proin neque eros, dapibus ac accumsansodales sit.<br/><br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default History