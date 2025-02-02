import TextArea from "../TextArea";

function Paragraph(props) {
    const className = "text-2xl min-h-full mt-4 font-semibold"
    const placeholder = "Введите текст здесь";

    return <TextArea className={className} placeholder={placeholder} {...props} />
}

export default Paragraph;