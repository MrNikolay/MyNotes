import Title from "./Types/Title";
import Paragraph from "./Types/Paragraph";


function Block(props) {
    const addNewBlock = () => props.addNewBlock(props.id);
    const deleteBlock = () => props.deleteBlock(props.id);

    if (props.focus)
        console.log(props.id)


    const restProps = {addNewBlock, deleteBlock, ...props}

    return (
        <>
            {props.type == 'paragraph' && <Paragraph {...restProps} />}
            {props.type == 'title' && <Title {...restProps} />}
        </>
    )
}


export default Block;