/* Отдельный компонент для отображения меню для манипулирования заметкой (становится видимым при наведении на какую-то заметку)
    а также он отображает дату создания заметки и управляет диалоговым окном ConfirmationWindowWrapper.js */

import { useState, useContext } from "react";

import MainContext from "../../../context/MainContext";

import ConfirmationWindowWrapper from "./ConfirmationWindowWrapper"
import PalleteIcon from "./NoteIcons/PalleteIcon";
import TrashIcon from "./NoteIcons/TrashIcon";


function NoteCardMenu(props) {
    const [ isConfirmationWindowShown, setIsConfirmationWindowShown ]= useState(false)    
    const mainContext = useContext(MainContext);

    // хэндлер для кнопки корзины (удаление заметки)
    function deleteNoteHandler() {
        // Сначала показывает подтверждающее окно, уже потом только удаляет (при нажатии Да)
        if (!isConfirmationWindowShown) {
            setIsConfirmationWindowShown(true);
        } else {
            mainContext.deleteNote(props.noteId);
            setIsConfirmationWindowShown(false);
        }
    }

    const closeConfirmationWindow = () => setIsConfirmationWindowShown(false);

    const iconSize = "30px";
    
    const className = "opacity-85 hover:opacity-100 hover:cursor-pointer";
    const iconsButtonsProps = { iconSize, theme: 'light', className }

    let content;
    
    // Определяем вид контента
    if (props.isFocused) {
        content = (
            <div>
                <div className="flex absolute -top-2 left-2 gap-2">
                    <TrashIcon {...iconsButtonsProps} onClick={deleteNoteHandler} />
                    <PalleteIcon {...iconsButtonsProps} />
                </div>
                <div>
                    <p className="text-right font-semibold mr-4 mb-1">{ props.date }</p>
                </div>
            </div>
        );
    } else {
        content = <p className="text-right font-semibold mr-4 mb-1">{ props.date }</p>
    }

    return (
        <ConfirmationWindowWrapper isShown={isConfirmationWindowShown} onYes={deleteNoteHandler} onClose={closeConfirmationWindow} >
            {content}
        </ConfirmationWindowWrapper>
    );
}


export default NoteCardMenu;