/* Основная шапка для всех страниц сайта. Этот компонент смотрит, находится ли он на главной странице и в зависимости от этого факта и условия props.forced решает, нужно ли ему отображаться
    * Можно воспроизвести появление с open/close анимацией, передав их название через props.animation
*/

import { useLocation } from "react-router-dom";

import SettingsGear from "./UI/SettingsGear";

function MainHeader(props) {
    const animation = props.animation || "";

    const location = useLocation();

    // Рендерим компонент только в том случае, если это не главная с траница
    if (location.pathname != '/' || props.forced) {
        return (
            <header className={`little-header fixed top-0 w-full bg-softBlack text-white py-4 z-20 ${animation}`}>
                <div className="w-11/12 max-w-[950px] mx-auto flex justify-between items-center">
                <div className="flex gap-7 sm:gap-14">
                    {/* Логотип */}
                    <h2 className="text-4xl font-bold">My Notes</h2>

                    {/* Кнопка Create Note */}
                    <div className="flex gap-2 hover:cursor-pointer items-center mt-1">
                    <img src="/images/add-note-white.svg" className="w-6"/>
                    <span className="font-medium text-xl">Create Note</span>
                    </div>
                </div>

                <SettingsGear color='white' className='w-10' openSettingsHandler={props.openSettingsHandler}/>
            </div>
            </header>
        );
    }
}

export default MainHeader;