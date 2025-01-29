/* Основной базовый SimpleHeader для главной страницы (когда она прокручена вниз) и всех остальных страниц */

function SimpleHeader(props) {
    const animation = props.animation || "";

    return (
        <header className={`little-header fixed top-0 w-full bg-softBlack text-white py-4 ${animation}`}>
            <div className="w-11/12 max-w-[950px] mx-auto flex justify-between items-center">
            <div className="flex gap-7 sm:gap-14">
                {/* Логотип */}
                <h2 className="text-4xl font-bold">My Notes</h2>

                {/* Кнопка Create Note */}
                <div className="flex gap-2 hover:cursor-pointer items-center mt-1">
                <img src="img/add-note-white.svg" className="w-6"/>
                <span className="font-medium text-xl">Create Note</span>
                </div>
            </div>

            {/* Шестерёнка с настройками */}
            <img src="img/gear-settings-white.svg" className="w-10 hover:cursor-pointer"/>
        </div>
        </header>
    );
}

export default SimpleHeader;