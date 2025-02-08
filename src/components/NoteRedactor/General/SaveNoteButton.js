import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NoteContext from "../../../context/NoteContext";
import MainContext from "../../../context/MainContext";


function SaveNoteButton(props) {
    const noteContext = useContext(NoteContext);
    const mainContext = useContext(MainContext);
    const navigate = useNavigate();

    // Обработчик сохранения заметки
    function saveNoteHandler() {
        const colors = ['beige', 'blue', 'green', 'red', 'violet', 'dark-blue']

        mainContext.saveNote({
            id: noteContext.id,
            date: new Date(),
            color: colors[Math.floor(Math.random() * colors.length)],
            blocks: noteContext.blocks
        })

        if (!props.isNotNew) {
            navigate('/')
        }
    }

    return (
        <button className="fixed bottom-8 right-8 bg-blue rounded py-3 px-4 text-xl font-semibold hover:bg-red transition" onClick={saveNoteHandler}>
            { props.isNotNew ? 'Сохранить изменения' : 'Создать заметку' }
        </button>
    );
}


export default SaveNoteButton;