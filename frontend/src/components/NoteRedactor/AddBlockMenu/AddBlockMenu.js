import { useEffect, useState, useContext, useRef } from 'react';

import TypesMenu from './TypesMenu';

import MainContext from '../../../context/MainContext';

function AddBlockMenu() {
    const mainContext = useContext(MainContext)

    const myDiv = useRef();
    const [ isMenuShown, setIsMenuShown ] = useState();

    const handleMouseClick = (event) => {
        if (!myDiv.current.contains(event.target)) {
            setIsMenuShown(false)
        }
    }

    const toggleClickHandler = (event) => {
        event.stopPropagation();
        setIsMenuShown(prevState => !prevState);
    }

    useEffect(() => {
        if (isMenuShown) {
            document.addEventListener('click', handleMouseClick);
        }

        return () => {
            document.removeEventListener('click', handleMouseClick)
        }
    }, [isMenuShown])


    return (
        <div ref={myDiv}>
            <button className="absolute h-full text-4xl cursor-pointer left-4" onClick={toggleClickHandler}>
                <span className={`${mainContext.isDarkThemeEnabled ? "text-white" : "text-softBlack"}`}>+</span>
            </button>
            { isMenuShown && <TypesMenu /> }
        </div>
    )
}

export default AddBlockMenu;