import { useContext } from "react";

import MainContext from "../../context/MainContext";

import ExtendedHeader from './ExtendedHeader';
import NoteCard from "./NoteCard";
import Footer from "./Footer";

function Home(props) {
    const { notes } = useContext(MainContext);

    return (
        <>
            <ExtendedHeader />

            <div className="relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-8 gap-y-14 mt-12 w-11/12 mx-auto text-gray-950">
                    {notes.map((note, index) => (
                        <NoteCard key={index} note={note} />
                    ))}
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home;