import { useContext } from "react";

// Import Types
import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";

// contexts
import NoteContext from "../../context/NoteContext";
import BlockContext from '../../context/BlockContext'

import AddBlockMenu from "./AddBlockMenu/AddBlockMenu";


function Block(props) {
    const noteContext = useContext(NoteContext);

    function changeValue(newValue) {
        const updatedBlocks = [...noteContext.blocks]
        updatedBlocks[props.index].value = newValue;

        props.setBlocks(updatedBlocks)
    }

    const isFocus = props.id === props.focusId;
    const isLast = props.id === props.lastBlockId;
    
    // Определяем компонент блока по типу
    const blockElement = {
        'paragraph': <Paragraph placeholder={isLast ? 'Enter text here...' : ''} value={props.value} changeValue={changeValue} />,
        'title': <Title placeholder={"Heading"} value={props.value} changeValue={changeValue} />
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