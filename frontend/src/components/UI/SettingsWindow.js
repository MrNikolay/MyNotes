import { useContext, useEffect, useState, useRef } from "react";

import ModalWindow from "./ModalWindow";

import MainContext from "../../context/MainContext";

function SettingsWindow(props) {
    const closeSettingsHandler = useContext(MainContext).closeSettings;
    const checkbox = useRef();

    useEffect(() => {
        checkbox.current.checked = !props.isDarkThemeEnabled;
    }, [])

    return (
        <ModalWindow onClose={closeSettingsHandler}>
            <h1 className="text-4xl font-bold text-center">Settings</h1>
            <h2 className="text-2xl font-medium text-center mt-8">Theme</h2>
            <div className="toggle-switch mt-4 text-left">
                <label>
                    {/* defaultChecked */}
                    <input type="checkbox" ref={checkbox} onClick={props.toggleTheme} />
                    <span className="slider"></span>
                </label>
            </div>
        </ModalWindow>
    );
}


export default SettingsWindow;