

function textTrim(text, n) {
    /* Обрезает текст до n символов */

    let result = text.trim().slice(0, n).trim();

    if (result.length < text.length)
        result += '...';

    return result
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
    const note = props.note;
    
    const title = textTrim(note.title, 42);
    const description = textTrim(note.content, 146);
    const color = colors[note.color] || "";
    
    const day = note.date.getDate();
    const month = note.date.toLocaleString('en-US', { month: 'short' });
    const year = note.date.getFullYear();
    const currentYear = new Date().getFullYear();

    const date = `${day} ${month} ${year != currentYear && year || ""}`

    return (
        <div>
            <p class="text-right font-semibold mr-4 mb-1">{date}</p>
            <div class={`${color} rounded-2xl p-8 h-72 overflow-hidden ${note.color == 'dark-blue' && 'text-white'}`}>
                <h3 class="font-bold text-2xl">{title}</h3>
                <p class="text-lg font-medium mt-4">{description}</p>
            </div>
        </div>
    );
}


export default NoteCard;