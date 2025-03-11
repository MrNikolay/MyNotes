import { createContext } from "react";

const NoteContext = createContext({
    // Список блоков (обособленных структур) заметки  (Title, Paragraph, ...)
    blocks: []
})


export default NoteContext;