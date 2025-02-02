import { useEffect, useRef, useState } from 'react';

function TextArea(props) {
    const textareaRef = useRef(null);
    const [height, setHeight] = useState('auto');

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';               // Сброс высоты
            textarea.style.height = `${textarea.scrollHeight}px`; // Установка новой высоты
            setHeight(textarea.scrollHeight + 'px');      // Сохранение высоты в состоянии
        }
    };

    /* Здесь находятся триггеры на ключевые клавиши (Enter, Backspace и другие) */
    const handleKeyDown = (event) => {
        if (event.key == 'Backspace' && textareaRef.current.value == "")
            props.deleteBlock(props.id);

        if (event.key == "Enter" && !event.shiftKey)
            props.addNewBlock(props.id);
    }

    useEffect(() => {
        handleInput(); // Инициализация высоты при монтировании
    }, []);

    const className = `bg-gray-50 overflow-hidden resize-none focus:outline-none placeholder:text-grayText ${props.className}`;

    return (
        <textarea
            id={props.id}
            ref={textareaRef}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={props.placeholder}
            className={className}
            style={{ height }}
        />
    );
}



export default TextArea;