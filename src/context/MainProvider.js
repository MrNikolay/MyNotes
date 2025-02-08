/* Компонент-обёртка над MainContext для управления состоянием списка существующих заметок и передачи этих данных в другие компоненты
    также он получает какие-то служебные фичи с App.js и передаёт их в дочерние компоненты
*/

import { useEffect, useState } from "react";
import MainContext from "./MainContext";

function MainProvider(props) {
    let notesData = JSON.parse(localStorage.getItem('notes'))
    notesData = notesData ? notesData : []

    const [ notes, setNotes ] = useState(() => {
        let notesData = JSON.parse(localStorage.getItem('notes'));
        return notesData ? notesData : []
    });

    // При каждом изменении notes сохраняем актуальные данные в localStorage
    useEffect(() => {
        console.log('сохраняем актуальные данные в localStorage...')
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    // Обработчик сохранения заметки
    function saveNote(note) {
        const index = notes.findIndex(item => item.id == note.id);

        // Если заметка уже существует
        if (index != -1) {
            const updatedNote = notes[index];
            updatedNote.blocks = note.blocks;
            setNotes([
                ...notes.slice(0, index),
                updatedNote,
                ...notes.slice(index + 1)
            ])
        } else {
            setNotes([...notes, note])
        }
    }

    return (
        <MainContext.Provider value={{notes, saveNote, ...props.value}}>
            {props.children}
        </MainContext.Provider>  
    );
}

export default MainProvider;