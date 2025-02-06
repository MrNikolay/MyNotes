// Import Types
import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";

// BlockContext
import BlockContext from '../../context/BlockContext'

import AddBlockMenu from "./AddBlockMenu/AddBlockMenu";


function Block(props) {
    const isFocus = props.id === props.focusId;
    const isLast = props.id === props.lastBlockId;
    
    // Определяем компонент блока по типу
    const blockElement = {
        'paragraph': <Paragraph placeholder={isLast ? 'Введите текст здесь...' : ''} />,
        'title': <Title placeholder={"Заголовок"} />
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