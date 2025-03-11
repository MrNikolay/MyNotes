
function FooterLink(props) {
    return (
        <a 
            href={props.href}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-white"
        >
            {props.children}
        </a>
    );
}


export default FooterLink;