/* Расширенный ExtendedHeader для главной страницы, представляющий два разных хэдера, которые отображаются в зависимости от того, прокручена ли она вверх или нет */

import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import MainContext from '../../context/MainContext';

import SimpleHeader from '../UI/MainHeader';  // свёрнутый хэдер
import SettingsGear from "../UI/SettingsGear";


const Header = (props) => {
    const isDarkThemeEnabled = props.isDarkThemeEnabled;

    const style = {
        backgroundColor: isDarkThemeEnabled ? "#1b1b1b" : "#f3f4f6",
    }

    return (
        <header className={`h-72 text-center py-10 ${props.isHidden && 'opacity-0'}`} style={style}>
            <SettingsGear color={isDarkThemeEnabled ? "white" : "black"} className='absolute top-12 right-24 w-14' openSettingsHandler={props.openSettingsHandler} />

            {/* Основной текст */}
            <h1 className={`${isDarkThemeEnabled ? "text-gray-100" : "text-gray-950"} text-5xl font-bold`}>My Notes</h1>
            <h2 className={`${isDarkThemeEnabled ? "text-gray-300" : "text-gray-600"} text-2xl font-medium my-5`}>A simple and user-friendly<br/>application for your notes</h2>

            {/* Кнопка Create Note */}
            <Link to="/edit-note">
                <div className="flex gap-3 justify-center items-center mt-8 hover:cursor-pointer">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="36" className='mt-1' viewBox="0 0 54 54" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C17.318 0 16.664 0.258611 16.1817 0.718912L0.753146 15.4462C0.270926 15.9065 0 16.5308 0 17.1818V46.6364C0 50.7033 3.45381 54 7.71429 54H28.2857C29.7059 54 30.8571 52.9011 30.8571 51.5455C30.8571 50.1898 29.7059 49.0909 28.2857 49.0909H7.71429C6.29414 49.0909 5.14286 47.992 5.14286 46.6364V19.6364H18C19.4202 19.6364 20.5714 18.5374 20.5714 17.1818V4.90909H38.5714C39.9916 4.90909 41.1429 6.00804 41.1429 7.36364V17.1818C41.1429 18.5374 42.2941 19.6364 43.7143 19.6364C45.1345 19.6364 46.2857 18.5374 46.2857 17.1818V7.36364C46.2857 3.29682 42.832 0 38.5714 0H18ZM15.4286 14.7273H8.7794L15.4286 8.38033V14.7273ZM43.7143 27C43.7143 25.6444 42.5631 24.5455 41.1429 24.5455C39.7227 24.5455 38.5714 25.6444 38.5714 27V34.3636H30.8571C29.4369 34.3636 28.2857 35.4625 28.2857 36.8182C28.2857 38.1738 29.4369 39.2727 30.8571 39.2727H38.5714V46.6364C38.5714 47.992 39.7227 49.0909 41.1429 49.0909C42.5631 49.0909 43.7143 47.992 43.7143 46.6364V39.2727H51.4286C52.8488 39.2727 54 38.1738 54 36.8182C54 35.4625 52.8488 34.3636 51.4286 34.3636H43.7143V27Z" 
                    fill={isDarkThemeEnabled ? "white" : "black"} />
                </svg>

                    <span className={`font-bold text-2xl ${ isDarkThemeEnabled ? "text-gray-50" : "text-gray-900" }`}>Create Note</span>
                </div>
            </Link>
        </header>
    );
};


function ExtendedHeader(props) {
    const mainContext = useContext(MainContext);
    const isDarkThemeEnabled = mainContext.isDarkThemeEnabled;

    const [ isSimpleHeaderExists, setIsSimpleHeaderExists ] = useState(false);
    const [ simpleHeaderAnimation, setSimpleHeaderAnimation ] = useState('close');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 100 && simpleHeaderAnimation != 'open') {
                if (!isSimpleHeaderExists)
                    setIsSimpleHeaderExists(true);
                
                setSimpleHeaderAnimation('open');
            } else if (scrollY <= 100 && simpleHeaderAnimation == 'open') {
                setSimpleHeaderAnimation('close');
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Воспроизводим очистку слушателя (при перезапуске useEffect)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSimpleHeaderExists, simpleHeaderAnimation]);

    const isHidden = simpleHeaderAnimation == 'open';

    return (
        <>
            <Header isHidden={isHidden} isDarkThemeEnabled={isDarkThemeEnabled} />
            
            {isSimpleHeaderExists && 
                <SimpleHeader animation={simpleHeaderAnimation} forced={true} />
            }
        </>
    );
}

export default ExtendedHeader;