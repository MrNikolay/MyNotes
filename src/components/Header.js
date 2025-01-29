/* Главный компонент шапки, отвечающий за логику отображения разных версий шапок в зависимости от текущей страницы
    "Если это главная страница, то отображает расширенный extendedHeader, в противном же случае простой simpleHeader"
*/

import { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import ExtendedHeader from './Headers/ExtendedHeader';
import SimpleHeader from './Headers/SimpleHeader';

function Header(props) {
    const [ isSimpleHeaderExists, setIsSimpleHeaderExists ] = useState(false);  // состояние, отслеживающее условие, что simpleHeader должен присутствовать в разметке
    const [ simpleHeaderAnimation, setSimpleHeaderAnimation ] = useState('close');

    const location = useLocation();
    
    if (location.pathname == '/') {
        useEffect(() => {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                console.log(scrollY);

                if (scrollY > 100 && simpleHeaderAnimation != 'open') {
                    if (!isSimpleHeaderExists)
                        setIsSimpleHeaderExists(true);
                    
                    setSimpleHeaderAnimation('open');
                } else if (scrollY <= 100 && simpleHeaderAnimation == 'open') {
                    console.log('aboba')
                    setSimpleHeaderAnimation('close');
                }
            }

            window.addEventListener('scroll', handleScroll);

            // Воспроизводим очистку слушателя (при перезапуске useEffect)
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };

        }, [isSimpleHeaderExists, simpleHeaderAnimation]);
    }

    console.log(simpleHeaderAnimation);
    if (location.pathname == '/')
        return (
            <Fragment>
                <ExtendedHeader isHidden={simpleHeaderAnimation == 'open'} />
                {isSimpleHeaderExists && <SimpleHeader animation={simpleHeaderAnimation} />}
            </Fragment>
        )
    else
        return <SimpleHeader />
        
        // location.pathname == '/' ? <ExtendedHeader /> : <SimpleHeader
}

export default Header;