import { useEffect, useRef, useState } from "react";

import Block from "./Block";


function NoteRedactor(props) {
    const [ marginTop, setMarginTop ] = useState('72');
    const [ blocks, setBlocks ] = useState([
        {id: crypto.randomUUID(), type: 'title', primary: true},
        {id: crypto.randomUUID(), type: 'paragraph', primary: true}
    ]);
    
    const findIndex = id => blocks.findIndex(block => block.id === id);

    // Функция добавления нового блока снизу
    function addNewBlock(id) {
        const index = findIndex(id);

        if (index !== -1) {
            const newBlock = { id: crypto.randomUUID(), type: 'paragraph' };

            const updatedBlocks = [
                ...blocks.slice(0, index + 1),
                newBlock,
                ...blocks.slice(index + 1)
            ]

            setBlocks(updatedBlocks);
        }
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

    useEffect(() => {
        const targetId = blocks[blocks.length - 1].id;
        const targetElement = document.getElementById(targetId);
        document.activeElement.blur();
        setTimeout(() => {
            targetElement.focus();
        }, 0)
    }, [blocks.length])

    const restProps = {addNewBlock, deleteBlock}

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