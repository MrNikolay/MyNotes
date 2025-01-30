import ModalWindow from "./ModalWindow";

function SettingsWindow() {
    return (
        <ModalWindow>
            <h1 class="text-4xl font-bold text-center">Settings</h1>
            <h2 class="text-2xl font-medium text-center mt-8">Theme</h2>
            <div class="toggle-switch mt-4">
                <label>
                <input type="checkbox" />
                <span class="slider"></span>
                </label>
            </div>
        </ModalWindow>
    );
}


export default SettingsWindow;