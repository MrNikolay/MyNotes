/* Меню с доступными типами блоков, которое высвечивается при нажатии AddBlockButton */
// Сейчас этот компонент используется только в AddBlockButton

import TypeSelector from "./TypeSelector";

function TypesMenu(props) {
    function createTitle() {
        console.log('title')
    }

    function createParagraph() {
        console.log('par')
    }

    const style = "absolute overflow-y-auto max-h-64 left-10 top-10 flex flex-col py-2 z-10 border-2 bg-gray-50"

    return (
        <div className={style}>
            <TypeSelector onClick={createTitle}>H Заголовок</TypeSelector>
            <TypeSelector onClick={createParagraph}>¶ Параграф</TypeSelector>
        </div>
    );
}

export default TypesMenu;