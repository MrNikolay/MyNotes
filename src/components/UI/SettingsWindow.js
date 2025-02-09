import { useContext } from "react";

import ModalWindow from "./ModalWindow";

import MainContext from "../../context/MainContext";

function SettingsWindow() {
    const closeSettingsHandler = useContext(MainContext).closeSettings;

    return (
        <ModalWindow onClose={closeSettingsHandler}>
            <h1 class="text-4xl font-bold text-center">Settings</h1>
            <h2 class="text-2xl font-medium text-center mt-8">Theme</h2>
            <div class="toggle-switch mt-4 text-left">
                <label>
                <input type="checkbox" defaultChecked/>
                <span class="slider"></span>
                </label>
            </div>
        </ModalWindow>
    );
}


export default SettingsWindow;