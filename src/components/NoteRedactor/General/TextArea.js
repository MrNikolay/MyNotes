import { useEffect, useRef, useContext } from 'react';

import BlockContext from '../../../context/BlockContext';
import NoteContext from '../../../context/NoteContext';


function TextArea(props) {
    const textareaRef = useRef(null);

    const blockContext = useContext(BlockContext);
    const noteContext = useContext(NoteContext);


    const handleInput = (event) => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';               // Сброс высоты
            textarea.style.height = `${textarea.scrollHeight}px`; // Установка новой высоты
        }
        props.changeValue(textarea.value);
    };

    // Обработчик нажатия стрелочек вверх/вниз
    const arrowKeyHandler = (event) => {
        const textarea = textareaRef.current;
        const CaretPosition = textarea.selectionStart;  // текущая позиция курсора
        const textBeforeCaret = textarea.value.slice(0, CaretPosition);
        const currentLine = textBeforeCaret.split('\n').length;  // определяем текущую строку
        const totalLines = textarea.value.split('\n').length;  // общее кол-во строк
        
        // Перемещение ВВЕРХ, если курсор на первой строке
        if (event.key === 'ArrowUp' && currentLine === 1) {
            event.preventDefault();
            noteContext.moveUp(blockContext.id);
        }
        
        // Перемещение ВНИЗ, если курсор на последней строке
        if (event.key === 'ArrowDown' && currentLine === totalLines) {
            event.preventDefault();
            noteContext.moveDown(blockContext.id);
        }
    }

    /* Здесь находятся триггеры на ключевые клавиши (Enter, Backspace и другие) */
    const handleKeyDown = (event) => {
        console.log('key_down()')
        if (event.key == 'Backspace' && textareaRef.current.value == "") {
            noteContext.deleteBlock(blockContext.id);
        }

        if (event.key == "Enter" && !event.shiftKey) {
            noteContext.enterHandler(blockContext.id);
        }

        if (event.key === 'ArrowUp' || event.key === "ArrowDown") {
            arrowKeyHandler(event);
        }
    }

    useEffect(() => {
        handleInput(); // Инициализация высоты при монтировании
    }, []);

    const className = ` w-[95%] mx-auto overflow-hidden resize-none focus:outline-none placeholder:text-grayText ${props.className}`;

    return (
        <textarea
            id={blockContext.id}
            ref={textareaRef}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={props.placeholder}
            value={props.value}
            className={className}
        >
            {props.value}
        </textarea>
    );
}



export default TextArea;