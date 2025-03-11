import { useContext } from "react";

import MainContext from "../../context/MainContext";

function SettingsGear(props) {
    const whiteIcon = `${process.env.PUBLIC_URL}/images/gear-settings-white.svg`
    const blackIcon = `${process.env.PUBLIC_URL}/images/gear-settings-black.svg`

    const openSettingsHandler = useContext(MainContext).openSettings;

    return <img 
        src={props.color == 'white' ? whiteIcon : blackIcon} 
        className={`${props.className} hover:cursor-pointer`}
        onClick={openSettingsHandler}
    />;
}

export default SettingsGear;