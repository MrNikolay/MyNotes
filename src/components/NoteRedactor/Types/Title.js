import TextArea from "../TextArea";

function Title(props) {
    const className = "text-4xl font-bold";

    return <TextArea className={className} {...props} />
}

export default Title;