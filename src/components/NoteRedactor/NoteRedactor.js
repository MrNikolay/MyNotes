import { useEffect, useState } from "react";

import Block from "./Block";

import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";


function NoteRedactor(props) {
    const [ marginTop, setMarginTop ] = useState('0');
    const [ blocks, setBlocks ] = useState([
        {id: 0, type: 'paragraph'}
    ]);

    useEffect(() => {
        // Получаем высоту хэдера (чтобы сделать правильный отступ и избавиться от перекрытия контента шапкой)
        const header = document.querySelector('header')
        
        if (header)
            setMarginTop(header.offsetHeight);
    }, [])

    return (
        <div id="editor" className="flex flex-col min-h-screen pt-8 px-16" style={{marginTop: marginTop + 'px'}}>
            <Title />
            {blocks.map((block) => (
                <Block key={block.id}>
                    {block.type == 'paragraph' && <Paragraph />}
                    {block.type == 'title' && <Title />}
                </Block>
            ))}
        </div>
    );
}


export default NoteRedactor;