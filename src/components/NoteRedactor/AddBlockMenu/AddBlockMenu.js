import { useEffect, useState, useRef } from 'react';

import TypesMenu from './TypesMenu';

function AddBlockMenu(props) {
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
            <button className="absolute text-4xl cursor-pointer top-[40%] -translate-y-5 left-2" onClick={toggleClickHandler}>+</button>
            { isMenuShown && 'aboba' }
        </div>
    )
}

export default AddBlockMenu;