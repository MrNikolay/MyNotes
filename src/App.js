// tools
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// components
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import NoteRedactor from "./components/NoteRedactor";
import SettingsWindow from "./components/UI/SettingsWindow";

// context
import MainProvider from "./context/MainProvider"


function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsOpen(true);
  }

  const closeSettings = () => {
    setIsSettingsOpen(false);
  }

  return (
    <BrowserRouter>
      <MainProvider value={{openSettings, closeSettings}}>
        
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
