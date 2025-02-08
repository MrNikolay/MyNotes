/* В главном компоненте App.js реализуется след. логика:
  - перехода по страницам
  - открытия окна с настройками
  - изменение состояния темы
  - отображение шапки
  и другие...

  Внимание: Логика управления контекстом заметок (в том числе работа с localStorage) реализована в MainProvider!
*/


// tools
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// components
import MainHeader from "./components/UI/MainHeader";
import Home from "./components/HomePage/Home";
import NoteRedactor from "./components/NoteRedactor/NoteRedactor";
import SettingsWindow from "./components/UI/SettingsWindow";

// context
import MainProvider from "./context/MainProvider"


function App() {
  const [ isSettingsOpen, setIsSettingsOpen ] = useState(false);
  const [ isDarkThemeEnabled, setIsDarkThemeEnabled ] = useState(false);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);


  const contextValue = {openSettings, closeSettings, isDarkThemeEnabled}
  return (
    <BrowserRouter>
      <MainProvider value={contextValue}>
        
        {isSettingsOpen && <SettingsWindow/>}
        <MainHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-note" element={<NoteRedactor />} />
        </Routes>
        
      </MainProvider>
    </BrowserRouter>
  );
}


export default App;
