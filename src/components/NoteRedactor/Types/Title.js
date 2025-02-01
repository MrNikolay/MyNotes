import TextArea from "../TextArea";

function Title(props) {
    const className = "text-4xl font-bold";
    const placeholder = "Заголовок";

    return <TextArea className={className} placeholder={placeholder} />
}

export default Title;