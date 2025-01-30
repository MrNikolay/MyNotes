/* Компонент-обёртка над NotesContext для управления состоянием заметок и передачи этих данных в другие компоненты */

import { use, useState } from "react";
import NotesContext from "./NotesContext";

import notes from "../other/dummy-notes";


const dummyNotes = notes;

function NotesProvider(props) {
    // Управление состоянием контекста
    const [ notes, setNotes ] = useState(dummyNotes);

    return (
        <NotesContext.Provider value={{notes}}>
            {props.children}
        </NotesContext.Provider>  
    );
}

export default NotesProvider;