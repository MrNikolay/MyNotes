/* Расширенный ExtendedHeader для главной страницы, представляющий два разных хэдера, которые отображаются в зависимости от того, прокручена ли она вверх или нет */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SimpleHeader from '../UI/MainHeader';  // свёрнутый хэдер
import SettingsGear from "../UI/SettingsGear";


const Header = (props) => (
    <header className={`bg-gray-100 h-72 text-center py-10 ${props.isHidden && 'opacity-0'}`}>
        <SettingsGear color='black' className='absolute top-12 right-24 w-14' openSettingsHandler={props.openSettingsHandler} />

        {/* Основной текст */}
        <h1 className="text-gray-950 text-5xl font-bold">My Notes</h1>
        <h2 className="text-gray-600 text-2xl font-medium my-5">A simple and user-friendly<br/>application for your notes</h2>

        {/* Кнопка Create Note */}
        <Link to="/edit-note">
            <div className="flex gap-3 justify-center items-center mt-8 hover:cursor-pointer">
                <img src="/images/add-note-black.svg" />
                <span className="font-bold text-2xl text-gray-900">Create Note</span>
            </div>
        </Link>
    </header>
);


function ExtendedHeader(props) {
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
            <Header isHidden={isHidden} />
            
            {isSimpleHeaderExists && 
                <SimpleHeader animation={simpleHeaderAnimation} forced={true} />
            }
        </>
    );
}

export default ExtendedHeader;