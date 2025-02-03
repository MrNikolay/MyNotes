import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";


function Block(props) {
    const handlers = {
        enterHandler: () => props.enterHandler(props.id),
        deleteBlock: () => props.deleteBlock(props.id),
        moveUp: () => props.moveUp(props.id),
        moveDown: () => props.moveDown(props.id)
    }

    const restProps = {...props, ...handlers}

    return (
        <>
            {props.type == 'paragraph' && <Paragraph {...restProps} />}
            {props.type == 'title' && <Title {...restProps} />}
        </>
    )
}


export default Block;