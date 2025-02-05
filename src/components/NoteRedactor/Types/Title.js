import TextArea from "../General/TextArea";

function Title(props) {
    const className = "bg-gray-100 text-4xl font-bold";

    return <TextArea className={className} {...props} />
}

export default Title;