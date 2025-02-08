import { createContext } from "react";

const MainContext = createContext({
    // контекст заметок
    notes: [],

    // включена ли тёмная тема
    isDarkThemeEnabled: false || true,

    // манипуляция модальным окном с настройками
    openSettingsWindow: () => {},
    closeSettingsWindow: () => {}
});

export default MainContext;