
function NoteRedactor(props) {

    return (
        <div id="editor" class="flex flex-col min-h-screen pt-8 px-16">
            <textarea type="text" placeholder="Название" class="bg-transparent text-4xl font-bold overflow-hidden placeholder:text-grayText focus:outline-none">Абоба</textarea>
            <textarea type="text" placeholder="Описание" class="bg-transparent text-2xl min-h-full mt-4 resize-none overflow-hidden font-semibold placeholder:text-grayText focus:outline-none"></textarea>
        </div>
    );
}

export default NoteRedactor;