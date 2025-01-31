import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import NoteRedactor from "./components/NoteRedactor";
import NotesProvider from './context/NotesProvider';

import SettingsWindow from "./components/UI/SettingsWindow";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => {
    setIsSettingsOpen(true);
  }

  return (
    <BrowserRouter>
      <MainHeader openSettingsHandler={openSettings} />

      <NotesProvider>
        <Routes>
          <Route path="/" element={<Home openSettingsHandler={openSettings} />} />
          <Route path="/edit-note" element={<NoteRedactor />} />
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
