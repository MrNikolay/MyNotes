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
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const body = document.body;
    const lightBackground = "bg-gray-50";
    const darkBackground = "bg-softBlack";

    if(isDarkThemeEnabled) {
      body.classList.remove(lightBackground);
      body.classList.add(darkBackground)
    } else {
      body.classList.remove(darkBackground);
      body.classList.add(lightBackground)
    }
  }, [isDarkThemeEnabled])

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  const toggleTheme = () => setIsDarkThemeEnabled(prev => !prev);


  const contextValue = {openSettings, closeSettings, isDarkThemeEnabled}
  return (
    <BrowserRouter>
      <MainProvider value={contextValue}>
        
        {isSettingsOpen && <SettingsWindow isDarkThemeEnabled={isDarkThemeEnabled} toggleTheme={toggleTheme} />}
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
