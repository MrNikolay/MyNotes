/* Компонент-обёртка над MainContext для управления состоянием списка существующих заметок и передачи этих данных в другие компоненты
    также он получает какие-то служебные фичи с App.js и передаёт их в дочерние компоненты

   * А ещё здесь реализована сортировка заметок (во время сохранения изменений)
*/

import { useEffect, useState } from "react";
import MainContext from "./MainContext";

function MainProvider(props) {
    const [ notes, setNotes ] = useState(() => {
        let notesData = JSON.parse(localStorage.getItem('notes'));
        return notesData ? notesData : []
    });

    // При каждом изменении notes сохраняем актуальные данные в localStorage
    useEffect(() => {
        // const saveData = notes.sort((a, b) => new Date(b.date) - new Date(a.date));
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
            setNotes([note, ...notes])
        }
    }

    // Функция для изменения существующей заметки (замены)
    function changeNote(id, newNote) {
        const index = notes.findIndex(note => note.id == id);
        const updatedNotes = [...notes];
        updatedNotes[index] = newNote;
        setNotes(updatedNotes);
    }

    // Обработчик удаления заметки
    const deleteNote = (id) => { setNotes(notes.filter(note => note.id != id)) }

    const provideValue = {
        notes, 
        saveNote,
        deleteNote,
        changeNote,
        ...props.value
    }

    return (
        <MainContext.Provider value={provideValue}>
            {props.children}
        </MainContext.Provider>  
    );
}

export default MainProvider;