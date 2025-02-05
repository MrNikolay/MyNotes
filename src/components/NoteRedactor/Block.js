import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";

import AddBlockMenu from "./AddBlockMenu/AddBlockMenu";

function Block(props) {
    const handlers = {
        enterHandler: () => props.enterHandler(props.id),
        deleteBlock: () => props.deleteBlock(props.id),
        moveUp: () => props.moveUp(props.id),
        moveDown: () => props.moveDown(props.id)
    }

    const isFocus = props.id === props.focusId;
    const isLast = props.id === props.lastBlockId;

    const restProps = {...props, ...handlers};
    
    const blockElement = {
        'paragraph': <Paragraph {...restProps} placeholder={isLast ? 'Введите текст здесь...' : ''} />,
        'title': <Title {...restProps} placeholder={"Заголовок"} />
    }[props.type]

    return (
        <div className="flex relative">
            { isFocus && <AddBlockMenu /> }
            { blockElement }
        </div>
    );
}


export default Block;