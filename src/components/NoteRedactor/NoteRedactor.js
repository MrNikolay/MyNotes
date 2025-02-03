import { useEffect, useRef, useState } from "react";

import Block from "./Block";


function NoteRedactor(props) {
    const [ marginTop, setMarginTop ] = useState('72');
    const [ blocks, setBlocks ] = useState([
        {id: crypto.randomUUID(), type: 'title', primary: true},
        {id: crypto.randomUUID(), type: 'paragraph', primary: true},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
        {id: crypto.randomUUID(), type: 'paragraph'},
    ]);
    
    const findIndex = id => blocks.findIndex(block => block.id === id);

    // Функция-обработчик клавиши Enter (добавление нового блока ИЛИ переход на следующий блок)
    function enterHandler(id) {
        const index = findIndex(id);

        // Если это последний блок, то добавляем новый ниже
        if (index == blocks.length - 1) {
            const newBlock = { id: crypto.randomUUID(), type: 'paragraph' };

            const updatedBlocks = [
                ...blocks.slice(0, index + 1),
                newBlock,
                ...blocks.slice(index + 1)
            ]

            setBlocks(updatedBlocks);
        // Если снизу что-то есть, то переносим фокус на следующий блок
        } else {
            const targetId = blocks[index + 1].id;
            stealFocus(targetId);
        }
    }

    // Обработчик перехода на строчку выше
    function moveUp(id) {
        const curIndex = findIndex(id);
        if (curIndex != 0)
            stealFocus(blocks[curIndex - 1].id);
    }

    // Обработчик перехода на строчку ниже
    function moveDown(id) {
        const curIndex = findIndex(id);
        if (curIndex != blocks.length - 1)
            stealFocus(blocks[curIndex + 1].id);
    }

    // функция перехватывает фокус и устанавливает его на конкретный элемент
    function stealFocus(id) {
        const targetElement = document.getElementById(id);
        document.activeElement.blur();
        setTimeout(() => {
            if (targetElement)
                targetElement.focus();
        }, 0)
    }

    // Функция для удаления блока
    function deleteBlock(id) {
        const index = findIndex(id)

        if (index !== -1 && !blocks[index].primary) {
            const updatedBlocks = blocks.filter(block => block.id !== id);
            setBlocks(updatedBlocks);
        }
    }

    // Делаем marginTop равный высоте шапки
    useEffect(() => {
        const header = document.querySelector('header')
        
        if (header)
            setMarginTop(header.offsetHeight);
    }, [])

    // При каждом изменении blocks (добавление/удаление) устанавливаем фокус на последний блок
    useEffect(() => {
        const targetId = blocks[blocks.length - 1].id;
        stealFocus(targetId);
    }, [blocks.length])

    const restProps = {enterHandler, deleteBlock, moveUp, moveDown}

    return (
        <div id="editor" className="flex flex-col min-h-screen pt-8 px-16" style={{marginTop: marginTop + 'px'}}>
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