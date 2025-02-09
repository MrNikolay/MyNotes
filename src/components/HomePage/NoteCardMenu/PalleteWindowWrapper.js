import ModalWindow from "../../UI/ModalWindow";
import colors from "../../UI/Colors";
import ColorItem from "./ColorItem";

function PalleteWindowWrapper(props) {
    const palleteWindow = (
            <ModalWindow onClose={props.onClose} >
                <h1 className='text-2xl mt-4 mb-4'>Выберите цвет для заметки</h1>
                <div className="flex justify-center gap-3">
                    {Object.keys(colors).map((color) => (
                        <ColorItem key={`color-item-${color}`} colorKey={color} color={colors[color]} changeColor={props.changeColor} />
                    ))}
                </div>
            </ModalWindow>
    );
    
    return (
        <>
            { props.isShown && palleteWindow }
            { props.children }
        </>
    );
}

export default PalleteWindowWrapper;