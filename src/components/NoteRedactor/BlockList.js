/* BlockList.js управляет блоками заметки. 
Он содержит методы по добавлению, удалению, вставки и другие методы для блоков, многие
из которых используют функции управления фокусом из NoteRedactor.js 

Также он управляет NoteContext.js  (там где хранится информация о блоках)
*/

import { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NoteContext from '../../context/NoteContext';

import Block from "./Block";
import SaveNoteButton from './General/SaveNoteButton';


// const defaultBlocks = [
//     {id: crypto.randomUUID(), type: 'title', value: ''},
//     {id: crypto.randomUUID(), type: 'paragraph', value: ''},
// ]


function BlockList(props) {
    const location = useLocation();
    const id = location.state ? location.state.id : crypto.randomUUID();
    
    /* Перенеси этот defaultBlocks за пределы функции и получишь любопытный баг (скрины бага есть в файлах проекта /tmp/...) 
        Вопрос: Как это работает?!
    */
    const defaultBlocks = [
        {id: crypto.randomUUID(), type: 'title', value: ''},
        {id: crypto.randomUUID(), type: 'paragraph', value: ''},
    ]

    const [ blocks, setBlocks ] = useState(location.state ? location.state.blocks : defaultBlocks);

    useEffect(() => {
        setBlocks(location.state ? [...location.state.blocks] : [...defaultBlocks]);
    }, [location.state])

    // ссылки на методы родителя (NoteRedactor)
    const setFocusId = props.setFocusId;

    // вспомогательные утилиты
    const findIndex = id => blocks.findIndex(block => block.id === id);
    const findLastBlockId = () => (blocks[blocks.length - 1].id);


    // Обработчик нажатия Enter (добавление нового блока ИЛИ переход на следующий блок)
    function enterHandler(id) {
        const index = findIndex(id);

        /* Если это последний блок, то добавляем новый ниже */
        if (index == blocks.length - 1) {
            const newId = crypto.randomUUID()
            const newBlock = { id: newId, type: 'paragraph' };

            const updatedBlocks = [
                ...blocks,
                newBlock
            ]

            setBlocks(updatedBlocks);
            setFocusId(newId);

        // Если снизу что-то есть, то переносим фокус на следующий блок
        } else {
            setFocusId(blocks[index + 1].id);
        }
    }

    // Добавление блока с определённым типом сразу после блока с данным id
    function insertNewBlock(id, type) {
        const newBlockId = crypto.randomUUID();
        const newBlock = { id: newBlockId, type: type }
        const index = findIndex(id)

        setBlocks([
            ...blocks.slice(0, index + 1),
            newBlock,
            ...blocks.slice(index + 1)
        ])
        setFocusId(newBlockId);
    }

    // Функция для удаления блока
    function deleteBlock(id) {
        const index = findIndex(id)

        /* если не главный заголовок и есть что удалять */
        if (index > 0 && blocks.length > 2) {
            const updatedBlocks = blocks.filter(block => block.id !== id);
            
            /* Если фокус стоял на последнем элементе */
            if (index == blocks.length - 1) {
                setFocusId(blocks[index - 1].id)  // ставим фокус на предпоследний элемент
            } else {
                setFocusId(blocks[index + 1].id)  // ставим фокус на следующий элемент
            }

            setBlocks(updatedBlocks);
        }

        /* Если пытаемся удалить второй по счёту заголовок, то трансформируем его в параграф
            P.S: Уж очень похоже на костыль
        */
        if (index == 1 && blocks[index].type == 'title') {
            setBlocks(blocks.map((block, ind) => (
                ind == index ? {...block, type: 'paragraph'} : block
            )))
        }
    }

    // Обработчик перехода на строчку выше
    function moveUp(id) {
        const curIndex = findIndex(id);
        if (curIndex != 0) {
            setFocusId(blocks[curIndex - 1].id)
        }
    }

    // Обработчик перехода на строчку ниже
    function moveDown(id) {
        const curIndex = findIndex(id);
        if (curIndex != blocks.length - 1)
            setFocusId(blocks[curIndex + 1].id)
    }


    // Побочный эффект при монтировании
    useEffect(() => {
        /* позволяем выборочно фокусироваться на каком-либо блоке */
        window.addEventListener('focusin', (event) => {
            const clickElementId = event.target.id
            if (clickElementId && findIndex(clickElementId) != -1) {
                setFocusId(clickElementId);
            }
        })

        /* устанавливаем фокус по-умолчанию на последний элемент */
        setFocusId(findLastBlockId());
    }, [])


    // данные контекста
    const provideData = {
        enterHandler,
        deleteBlock,
        moveUp,
        moveDown,
        insertNewBlock,
        blocks,
        // setBlocks,
        id
    }

    // пропсы для blocks
    const restProps = {
        focusId: props.focusId,
        lastBlockId: findLastBlockId(),
        setBlocks
    }

    return (
        <NoteContext.Provider value={provideData}>

            {blocks.map((block, index) => (
                <Block key={block.id} {...block} {...restProps} index={index} />
            ))}

            <SaveNoteButton isNotNew={location.state != undefined} />

        </NoteContext.Provider>
    );
}


export default BlockList;