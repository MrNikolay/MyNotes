import FooterLink from "./FooterLink";

function Footer() {
    const githubHref = "https://github.com/USERNAME/REPO";
    const telegramHref = "https://t.me/USERNAME"

    return (
        <footer className="bg-gray-800 w-full py-4">
            
            <p className="text-center text-white font-medium text-xl">
                Practical project, built with ❤️ using React !
            </p>

            <div className="flex justify-center gap-8 text-blue font-semibold text-lg mt-4">
                <FooterLink href={githubHref}>
                    <img src="/images/github-icon.png" className="w-10 -ml-2"/>
                    <span className="ml-1">Code on GitHub</span>
                </FooterLink>
                
                <FooterLink href={telegramHref}>
                    <img src="/images/telegram-icon.png" className="w-10"/>
                    <span>My Telegram</span>
                </FooterLink>
            </div>
        </footer>
    );
}


export default Footer;