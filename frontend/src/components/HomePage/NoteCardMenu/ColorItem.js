
function ColorItem(props) {
    const pickColorHandler = () => props.changeColor(props.colorKey);

    return (
        <div 
            className={`rounded-full w-12 h-12 transition-transform hover:scale-110 hover:cursor-pointer ${props.color}`}
            onClick={pickColorHandler}
        />
    );
}

export default ColorItem;