/* Отдельный компонент для отображения меню для манипулирования заметкой (становится видимым при наведении на какую-то заметку)
    а также он отображает дату создания заметки и управляет диалоговым окном ConfirmationWindowWrapper.js */

import { useState, useContext } from "react";

import MainContext from "../../../context/MainContext";

import PalleteWindowWrapper from "./PalleteWindowWrapper"
import ConfirmationWindowWrapper from "./ConfirmationWindowWrapper"
import PalleteIcon from "./NoteIcons/PalleteIcon";
import TrashIcon from "./NoteIcons/TrashIcon";


function NoteCardMenu(props) {
    const [ isConfirmationWindowShown, setIsConfirmationWindowShown ]= useState(false)
    const [ isPalleteWindowShown, setIsPalleteWindowShown ] = useState(false);

    const mainContext = useContext(MainContext);

    // хэндлер для кнопки корзины (удаление заметки)
    function deleteNoteHandler() {
        // Сначала показывает подтверждающее окно, уже потом только удаляет (при нажатии Да)
        if (!isConfirmationWindowShown) {
            setIsConfirmationWindowShown(true);
        } else {
            mainContext.deleteNote(props.note.id);
            setIsConfirmationWindowShown(false);
        }
    }

    // хэндлер для изменения цвета заметки
    function changeColorHandler(color) {
        const updatedNote = props.note;
        updatedNote.color = color;
        mainContext.changeNote(props.note.id, updatedNote);
        // setIsPalleteWindowShown(false);
    }

    const closeConfirmationWindow = () => setIsConfirmationWindowShown(false);
    const closePalleteWindow = () => setIsPalleteWindowShown(false);
    const openPalletWindow = () => setIsPalleteWindowShown(true);

    const iconSize = "30px";
    
    const className = "opacity-85 hover:opacity-100 hover:cursor-pointer";
    const iconsButtonsProps = { iconSize, theme: 'light', className }

    let content;

    const dateParagraphElement = <p className={`${mainContext.isDarkThemeEnabled ? "text-white" : "text-black"} text-right font-semibold mr-4 mb-1`}>{ props.date }</p>;

    // Определяем вид контента
    if (props.isFocused) {
        content = (
            <div>
                <div className="flex absolute -top-2 left-2 gap-2">
                    <TrashIcon {...iconsButtonsProps} onClick={deleteNoteHandler} isDarkThemeEnabled={mainContext.isDarkThemeEnabled} />
                    <PalleteIcon {...iconsButtonsProps} onClick={openPalletWindow} isDarkThemeEnabled={mainContext.isDarkThemeEnabled} />
                </div>
                <div>
                    {dateParagraphElement}
                </div>
            </div>
        );
    } else {
        content = dateParagraphElement
    }

    return (
        <ConfirmationWindowWrapper isShown={isConfirmationWindowShown} onYes={deleteNoteHandler} onClose={closeConfirmationWindow} >
            <PalleteWindowWrapper isShown={isPalleteWindowShown} changeColor={changeColorHandler} onClose={closePalleteWindow}>
                {content}
            </PalleteWindowWrapper>
        </ConfirmationWindowWrapper>
    );
}


export default NoteCardMenu;