
function TypeSelector(props) {

    const style = "textBg hover:bg-gray-200 font-semibold text-lg py-4 px-6 transition-colors duration-200"
    
    return (
        <button className={style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}


export default TypeSelector;