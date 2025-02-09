/* Кнопка создания/сохранения заметки в BlockList.js */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NoteContext from "../../../context/NoteContext";
import MainContext from "../../../context/MainContext";

import colors from '../../UI/Colors';


function SaveNoteButton(props) {
    const noteContext = useContext(NoteContext);
    const mainContext = useContext(MainContext);
    const navigate = useNavigate();

    // Обработчик сохранения заметки
    function saveNoteHandler() {
        const colorsList = Object.keys(colors)
        mainContext.saveNote({
            id: noteContext.id,
            date: new Date().toISOString(),
            color: colorsList[Math.floor(Math.random() * colorsList.length)],
            blocks: noteContext.blocks
        })

        if (!props.isNotNew) {
            navigate('/')
        }
    }

    return (
        <button className="fixed bottom-8 right-8 bg-blue rounded py-3 px-4 text-xl font-semibold hover:bg-red transition" onClick={saveNoteHandler}>
            { props.isNotNew ? 'Save changes' : 'Create note' }
        </button>
    );
}


export default SaveNoteButton;