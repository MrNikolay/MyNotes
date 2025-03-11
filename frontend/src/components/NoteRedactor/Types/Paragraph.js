import TextArea from "../General/TextArea";

function Paragraph(props) {
    const className = "text-2xl min-h-full font-semibold"

    return <TextArea className={className} {...props} />
}

export default Paragraph;