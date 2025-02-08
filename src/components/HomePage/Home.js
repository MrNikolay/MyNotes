/* Главная страница */

import { useContext } from "react";

import MainContext from "../../context/MainContext";

import ExtendedHeader from './ExtendedHeader';
import NotesList from "./NotesList";
import Footer from "./Footer";


function Home() {
    const { notes } = useContext(MainContext);

    const messageIfNoNotes = (
            <h1 className="mt-36 font-bold text-4xl text-softBlack text-center leading-relaxed">
                You don't have any notes yet <br />Write your first one!
            </h1>
    )

    return (
        <>
            <ExtendedHeader />

            <div className="relative min-h-svh pb-48">
                {notes.length ? <NotesList notes={notes} /> : messageIfNoNotes}
            </div>
            <Footer/>
        </>
    );
}

export default Home;