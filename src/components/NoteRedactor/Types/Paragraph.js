import TextArea from "../General/TextArea";

function Paragraph(props) {
    const className = "text-2xl min-h-full font-semibold"

    return <TextArea className={className} placeholder={props.placeholder} />
}

export default Paragraph;