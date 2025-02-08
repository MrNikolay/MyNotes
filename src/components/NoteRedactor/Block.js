import { useContext, useEffect } from "react";

// Import Types
import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";

// contexts
import NoteContext from "../../context/NoteContext";
import BlockContext from '../../context/BlockContext'

import AddBlockMenu from "./AddBlockMenu/AddBlockMenu";


function Block(props) {
    const noteContext = useContext(NoteContext);

    function changeValue(value) {
        const block = noteContext.blocks.filter(block => block.id == props.id)[0]
        block.value = value
        noteContext.setBlocks([
            ...noteContext.blocks.slice(0, props.index),
            block,
            ...noteContext.blocks.slice(props.index + 1)
        ])
    }

    const isFocus = props.id === props.focusId;
    const isLast = props.id === props.lastBlockId;
    
    // Определяем компонент блока по типу
    const blockElement = {
        'paragraph': <Paragraph placeholder={isLast ? 'Введите текст здесь...' : ''} value={props.value} changeValue={changeValue} />,
        'title': <Title placeholder={"Заголовок"} value={props.value} changeValue={changeValue} />
    }[props.type]

    const contextData = {
        id: props.id
    }

    return (
        <BlockContext.Provider value={contextData} >
            <div className="flex relative">
                { isFocus && <AddBlockMenu /> }
                { blockElement }
            </div>
        </BlockContext.Provider>
    );
}


export default Block;