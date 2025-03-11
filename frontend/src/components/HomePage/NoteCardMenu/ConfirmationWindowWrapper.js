/* ConfirmationWindowWrapper.js отвечает за отображение диалогового окна с подтверждением удаления заметки. 
    Его отображение регулирует NoteCardMenu.js */
import { useContext } from 'react';

import MainContext from '../../../context/MainContext';

import ModalWindow from '../../UI/ModalWindow';


function ConfirmationWindowWrapper(props) {
    const mainContext = useContext(MainContext);

    let buttonsBackground, textColor;
    if (mainContext.isDarkThemeEnabled) {
        buttonsBackground = "bg-white";
        textColor = "text-black";
    } else {
        buttonsBackground = "bg-softBlack";
        textColor = "text-white";
    }

    const window = (
        <ModalWindow onClose={props.onClose}>
            <h1 className='text-2xl mt-4 mb-4'>Are you sure you want to delete the note?</h1>
            <div className='flex justify-center gap-12 mt-6'>
                <button 
                    className={`${buttonsBackground} ${textColor} font-semibold px-8 py-1 text-xl transition-all hover:bg-blue hover:text-black`}
                    onClick={props.onYes}
                > Yes </button>
                <button 
                    className={`${buttonsBackground} ${textColor} font-semibold px-8 py-1 text-xl transition-all hover:bg-blue hover:text-black`}
                    onClick={props.onClose}
                > No </button>
            </div>
        </ModalWindow>
    );
    
    return (
        <>
            {props.isShown && window}
            {props.children}
        </>
    );
}


export default ConfirmationWindowWrapper;