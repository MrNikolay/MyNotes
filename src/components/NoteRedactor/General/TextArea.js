import { useEffect, useRef, useState } from 'react';

function TextArea(props) {
    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';               // Сброс высоты
            textarea.style.height = `${textarea.scrollHeight}px`; // Установка новой высоты
        }
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
            props.moveUp();
        }
        
        // Перемещение ВНИЗ, если курсор на последней строке
        if (event.key === 'ArrowDown' && currentLine === totalLines) {
            event.preventDefault();
            props.moveDown();
        }
    }

    /* Здесь находятся триггеры на ключевые клавиши (Enter, Backspace и другие) */
    const handleKeyDown = (event) => {
        if (event.key == 'Backspace' && textareaRef.current.value == "")
            props.deleteBlock(props.id);

        if (event.key == "Enter" && !event.shiftKey)
            props.enterHandler(props.id);

        if (event.key === 'ArrowUp' || event.key === "ArrowDown") {
            // event.preventDefault();
            arrowKeyHandler(event);
        }
    }

    useEffect(() => {
        handleInput(); // Инициализация высоты при монтировании
    }, []);

    const className = ` w-[95%] mx-auto overflow-hidden resize-none focus:outline-none placeholder:text-grayText ${props.className}`;

    return (
        <textarea
            id={props.id}
            ref={textareaRef}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={props.placeholder}
            className={className}
        />
    );
}



export default TextArea;