import { Link, useNavigate } from "react-router-dom";


function textTrim(text, n) {
    /* Обрезает текст до n символов */

    let result = text.trim().slice(0, n).trim();

    if (result.length < text.length)
        result += '...';

    return result
}

/* получает список блоков заметки и возвращает обработанное краткое описание заметки для главной страницы */
function getDescription(blocks) {
    // макс: 156-166  (158?)
    const maxLength = 158;

    const paragraphList = blocks.filter((block) => (block.type == 'paragraph'));
    
    let isBreak = false;
    let description = '';

    // добавляем текст каждого параграфа в итоговый description
    for (const paragraph of paragraphList) {
        description += paragraph.value + " ";
        if (description.length > maxLength) {
            isBreak = true;
            break;
        }
    }

    // если случилось переполнение, то обрезаем, а иначе возвращаем без изменений
    return isBreak ? textTrim(description, maxLength) : description
}



const colors = {
    'beige': 'bg-beige',
    'blue': 'bg-blue',
    'green': 'bg-green',
    'red': 'bg-red',
    'violet': 'bg-violet',
    'dark-blue': 'bg-gray-700',
}


function NoteCard(props) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/edit-note', { state: { blocks: note.blocks, id: note.id } });
    };


    const note = props.note;
    
    /* определение заголовка и краткого описания */
    const title = textTrim(note.blocks[0].value, 42);
    const description = getDescription(note.blocks);
    const color = colors[note.color] || "";
    
    /* получение и обработка даты */
    const date = new Date(note.date)

    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();

    const dateInfo = `${day} ${month} ${year != currentYear && year || ""}`

    return (
        <div className="transition-transform transform hover:scale-105 hover:cursor-pointer" onClick={handleNavigate}>
            <p className="text-right font-semibold mr-4 mb-1">{dateInfo}</p>
            <div class={`${color} rounded-2xl p-8 h-72 overflow-hidden ${note.color == 'dark-blue' && 'text-white'}`}>
                <h3 class="font-bold text-2xl">{title}</h3>
                <p class="text-lg font-medium mt-4 break-words">{description}</p>
            </div>
        </div>
    );
}


export default NoteCard;