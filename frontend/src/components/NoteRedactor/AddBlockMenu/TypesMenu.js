/* Меню с доступными типами блоков, которое высвечивается при нажатии AddBlockButton */
// Сейчас этот компонент используется только в AddBlockButton

import { useContext } from "react";

import NoteContext from "../../../context/NoteContext";
import BlockContext from "../../../context/BlockContext";

import TypeSelector from "./TypeSelector";


function TypesMenu() {
    const noteContext = useContext(NoteContext);
    const blockContext = useContext(BlockContext);

    const createNewBlock = (type) => noteContext.insertNewBlock(blockContext.id, type);

    const createTitle = () => createNewBlock('title');
    const createParagraph = () => createNewBlock('paragraph')

    const style = "absolute overflow-y-auto max-h-64 left-10 top-10 flex flex-col py-2 z-10 border-2 bg-gray-50"

    return (
        <div className={style}>
            <TypeSelector onClick={createTitle}>H Заголовок</TypeSelector>
            <TypeSelector onClick={createParagraph}>¶ Параграф</TypeSelector>
        </div>
    );
}

export default TypesMenu;