/* Меню с доступными типами блоков, которое высвечивается при нажатии AddBlockButton */
// Сейчас этот компонент используется только в AddBlockButton

import TypeSelector from "./TypeSelector";

function TypesMenu(props) {
    return (
        <div className="absolute flex flex-col bg-gray-100">
            <TypeSelector>Пункт 1</TypeSelector>
            <TypeSelector>Пункт 2</TypeSelector>
            <TypeSelector>Пункт 3</TypeSelector>
            <TypeSelector>Пункт 4</TypeSelector>
            <TypeSelector>Пункт 5</TypeSelector>
            <TypeSelector>Пункт 6</TypeSelector>
        </div>
    );
}

export default TypesMenu;