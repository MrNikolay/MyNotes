import { useEffect, useState } from "react";

import BlockList from "./BlockList";


/* ЗАМЕТКИ НА БУДУЩЕЕ
    - Убрать автозаполнение браузером (он думает что нужно вводить электронную почту)
    - Сделать текст в placeholder поменьше, да и вообще весь текст поменьше
*/

function NoteRedactor(props) {
    const [ marginTop, setMarginTop ] = useState('72');
    const [ focusId, setFocusId ] = useState()

    // функция перехватывает фокус и устанавливает его на конкретный элемент
    function stealFocus(id) {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            document.activeElement.blur();
            setTimeout(() => {
                if (targetElement) {
                    targetElement.focus();
                }
            }, 0)
        }
    }

    // Побочный эффект при монтировании
    useEffect(() => {
        /* Динамически подстраиваем верхний отступ от шапки */
        const header = document.querySelector('header')
        
        if (header)
            setMarginTop(header.offsetHeight);
    }, [])

    // Автоматическая фокусировка на новые focusId
    useEffect(() => {
        stealFocus(focusId);
    }, [focusId])

    
    const className = "flex flex-col min-h-screen pt-8";
    const style = {marginTop: marginTop + 'px'}

    const restProps = {focusId, setFocusId}

    return (
        <div id="editor" className={className} style={style}>
            <BlockList {...restProps} />
        </div>
    );
}


export default NoteRedactor;