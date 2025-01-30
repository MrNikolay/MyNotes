
function SettingsGear(props) {
    const icon = `/images/gear-settings-${props.color}.svg`

    return <img src={icon} className={`${props.className} hover:cursor-pointer`}/>;
}

export default SettingsGear;