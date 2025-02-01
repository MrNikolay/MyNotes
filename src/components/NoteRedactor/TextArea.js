import { useState } from "react";

function TextArea(props) {
    const [ height, setHeight ] = useState()
    console.log('изменяем высоту')

    const inputListener = (event) => {
        const scrollHeight = event.target.scrollHeight;
        
        if (scrollHeight != height)
            setHeight(event.target.scrollHeight);
    }

    const className = `bg-gray-100 overflow-hidden resize-none focus:outline-none placeholder:text-grayText ${props.className}`;
    const style = {
        height: height ? `${height}px` : 'auto'
    }

    return <textarea 
        onInput={inputListener} 
        placeholder={props.placeholder} 
        className={className}
        style={style} 
    />
};


export default TextArea;