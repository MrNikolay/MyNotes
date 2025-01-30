import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotesProvider from './context/NotesProvider';
import Header from "./components/Header";
import Home from "./components/Home";
import NoteRedactor from "./components/NoteRedactor";

import SettingsWindow from "./components/UI/SettingsWindow";

function App() {
  return (
    <BrowserRouter>
      <SettingsWindow>Test</SettingsWindow>
      <Header />

      <NotesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-note" element={<NoteRedactor />} />
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
}

export default App;
