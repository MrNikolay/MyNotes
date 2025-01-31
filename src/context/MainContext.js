import { createContext } from "react";

const MainContext = createContext({
    // контекст заметок
    notes: [],

    // манипуляция модальным окном с настройками
    openSettingsWindow: () => {},
    closeSettingsWindow: () => {}
});

export default MainContext;