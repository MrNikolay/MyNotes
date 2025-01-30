/* Расширенный ExtendedHeader для главной страницы (когда она прокручена вверх) */
import SettingsGear from "../UI/SettingsGear";

function ExtendedHeader(props) {
    return (
        <header className={`bg-gray-100 h-72 text-center py-10 ${props.isHidden && 'opacity-0'}`}>
            <SettingsGear color='black' className='absolute top-12 right-24 w-14'/>

            {/* Основной текст */}
            <h1 className="text-gray-950 text-5xl font-bold">My Notes</h1>
            <h2 className="text-gray-600 text-2xl font-medium my-5">A simple and user-friendly<br/>application for your notes</h2>

            {/* Кнопка Create Note */}
            <div className="flex gap-3 justify-center items-center mt-8 hover:cursor-pointer">
                <img src="/images/add-note-black.svg" />
                <span className="font-bold text-2xl text-gray-900">Create Note</span>
            </div>
        </header>
    );
}

export default ExtendedHeader;