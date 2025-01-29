import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import NoteRedactor from "./components/NoteRedactor";

/* 
  <React> - главный компонент-обёртка, чтобы react-router-dom работал
  <Link to="/about">О нас</Link> - создаёт ссылку на страницу
  
  <Switch> -  переключатель страниц (выбирается только одна подходящая)
    <Route path="/about" component={About} /> - связка компонента и маршрута
  </Switch>
*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div class="h-[2000px]">
        <h1 class="text-4xl font-bold mt-12">Абобистость</h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-note" element={<NoteRedactor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
