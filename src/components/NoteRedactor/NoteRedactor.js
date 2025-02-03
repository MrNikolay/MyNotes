import { useEffect, useRef, useState } from "react";

import Block from "./Block";


function NoteRedactor(props) {
    const [ marginTop, setMarginTop ] = useState('72');
    const [ blocks, setBlocks ] = useState([
        {id: crypto.randomUUID(), type: 'title', primary: true},
        {id: crypto.randomUUID(), type: 'paragraph'},
    ]);
    const [ focusId, setFocusId ] = useState()
    
    const findIndex = id => blocks.findIndex(block => block.id === id);

    // Функция-обработчик клавиши Enter (добавление нового блока ИЛИ переход на следующий блок)
    function enterHandler(id) {
        const index = findIndex(id);

        // Если это последний блок, то добавляем новый ниже
        if (index == blocks.length - 1) {
            const newId = crypto.randomUUID()
            const newBlock = { id: newId, type: 'paragraph' };

            const updatedBlocks = [
                ...blocks.slice(0, index + 1),
                newBlock,
                ...blocks.slice(index + 1)
            ]

            setBlocks(updatedBlocks);
            setFocusId(newId);

        // Если снизу что-то есть, то переносим фокус на следующий блок
        } else {
            setFocusId(blocks[index + 1].id);
        }
    }

    // Функция для удаления блока
    function deleteBlock(id) {
        const index = findIndex(id)
        console.log(index);

        if (index > 0 && blocks.length > 2) {
            const updatedBlocks = blocks.filter(block => block.id !== id);
            
            // Если фокус стоял на последнем элементе
            if (index == blocks.length - 1) {
                setFocusId(blocks[index - 1].id)  // ставим фокус на предпоследний элемент
            } else {
                setFocusId(blocks[index + 1].id)  // ставим фокус на следующий элемент
            }

            setBlocks(updatedBlocks);
        }
    }

    // функция перехватывает фокус и устанавливает его на конкретный элемент
    function stealFocus(id) {
        const targetElement = document.getElementById(id);
        document.activeElement.blur();
        setTimeout(() => {
            if (targetElement) {
                targetElement.focus();
            }
        }, 0)
    }

    // Обработчик перехода на строчку выше
    function moveUp(id) {
        const curIndex = findIndex(id);
        if (curIndex != 0) {
            setFocusId(blocks[curIndex - 1].id)
        }
    }

    // Обработчик перехода на строчку ниже
    function moveDown(id) {
        const curIndex = findIndex(id);
        if (curIndex != blocks.length - 1)
            setFocusId(blocks[curIndex + 1].id)
    }

    // Начальные скрипты при монтировании
    useEffect(() => {
        const header = document.querySelector('header')
        
        if (header)
            setMarginTop(header.offsetHeight);

        window.addEventListener('focusin', (event) => {
            setFocusId(event.target.id)
        })

        const targetFocusId = blocks[blocks.length - 1].id;
        setFocusId(targetFocusId);
        stealFocus(targetFocusId);
    }, [])

    useEffect(() => {
        stealFocus(focusId);
    }, [focusId])

    const restProps = {
        enterHandler, deleteBlock, moveUp, moveDown, focusId
    }

    return (
        <div id="editor" className="flex flex-col min-h-screen pt-8" style={{marginTop: marginTop + 'px'}}>
            {blocks.map((block, index) => ( 
                <Block 
                    key={block.id}
                    {...block} 
                    {...restProps}
                />
            ))}
        </div>
    );
}


export default NoteRedactor;