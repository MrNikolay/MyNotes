import TextArea from "../TextArea";

function Paragraph(props) {
    const className = "text-2xl min-h-full mt-4 font-semibold"

    return <TextArea className={className} {...props} />
}

export default Paragraph;