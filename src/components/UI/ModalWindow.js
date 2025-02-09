/* Компонент для создания независимого модального окна (появляется в самом верхнем уровне DOM)
    получает props.onClose (хэндлер нажатия крестика) и props.children
*/
import ReactDOM from "react-dom";

function ModalWindow(props) {
    const modalWindow = (
        <>
            <div className="fixed w-svw h-svh bg-black opacity-50 z-30" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1024px] bg-white z-40 min-h-[240px] p-14 rounded">
                <img onClick={props.onClose} src="/images/cross-black.svg" className="absolute w-10 right-10 top-8 hover:cursor-pointer" />
                <div className="text-center">
                    {props.children}
                </div>
            </div>
        </>
    );
    
    return ReactDOM.createPortal(modalWindow, document.getElementById('modal-window-portal'))
}

export default ModalWindow;