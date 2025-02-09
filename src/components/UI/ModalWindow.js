/* Компонент для создания независимого модального окна (появляется в самом верхнем уровне DOM)
    получает props.onClose (хэндлер нажатия крестика) и props.children
*/
import { useContext } from "react";
import ReactDOM from "react-dom";

import MainContext from "../../context/MainContext";

function ModalWindow(props) {
    const mainContext = useContext(MainContext)
    const isDarkThemeEnabled = mainContext.isDarkThemeEnabled
    const background = isDarkThemeEnabled ? "bg-softBlack" : "bg-white"

    const modalWindow = (
        <>
            <div className="fixed w-svw h-svh bg-black opacity-50 z-30" />
            <div className={`${background} ${isDarkThemeEnabled && "text-white"} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1024px] z-40 min-h-[240px] p-14 rounded`}>

                {/* Крестик для закрытия окна */}
                <div onClick={props.onClose} className="absolute w-10 right-10 top-8 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45px" viewBox="0 0 24 24" fill="none">
                        <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke={isDarkThemeEnabled ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="text-center">
                    {props.children}
                </div>
            </div>
        </>
    );
    
    return ReactDOM.createPortal(modalWindow, document.getElementById('modal-window-portal'))
}

export default ModalWindow;