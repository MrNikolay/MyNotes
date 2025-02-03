import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";


function Block(props) {
    const handlers = {
        enterHandler: () => props.enterHandler(props.id),
        deleteBlock: () => props.deleteBlock(props.id),
        moveUp: () => props.moveUp(props.id),
        moveDown: () => props.moveDown(props.id)
    }

    const isFocus = props.id === props.focusId;
    const restProps = {...props, ...handlers};
    
    const blockElement = {
        'paragraph': <Paragraph {...restProps} placeholder={isFocus ? 'Введите текст здесь...' : ''} />,
        'title': <Title {...restProps} placeholder={"Заголовок"} />
    }[props.type]

    if (false)
        return (
            <div className="flex relative">
                <span className="absolute text-4xl cursor-pointer top-[50%] -translate-y-5 left-2">+</span>
                {blockElement}
            </div>
        )
    else
        return (
            <div className="flex relative">
                {isFocus && <span className="absolute text-4xl cursor-pointer top-[50%] -translate-y-5 left-2">+</span>}
                {blockElement}
            </div>
    );
}


export default Block;