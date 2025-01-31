/* Компонент-обёртка над NotesContext для управления состоянием заметок и передачи этих данных в другие компоненты */

import { useState } from "react";
import MainContext from "./MainContext";

import notes from "../other/dummy-notes";


const dummyNotes = notes;

function MainProvider(props) {
    const [ notes, setNotes ] = useState(dummyNotes);

    return (
        <MainContext.Provider value={{notes, ...props.value}}>
            {props.children}
        </MainContext.Provider>  
    );
}

export default MainProvider;