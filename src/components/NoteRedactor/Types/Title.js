import TextArea from "../General/TextArea";

function Title(props) {
    const className = "text-4xl font-bold";

    return <TextArea className={className} placeholder={props.placeholder} />
}

export default Title;