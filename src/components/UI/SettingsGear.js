import { useContext } from "react";

import MainContext from "../../context/MainContext";

function SettingsGear(props) {
    const icon = `/images/gear-settings-${props.color}.svg`;
    const openSettingsHandler = useContext(MainContext).openSettings;

    return <img 
        src={icon} 
        className={`${props.className} hover:cursor-pointer`}
        onClick={openSettingsHandler}
    />;
}

export default SettingsGear;