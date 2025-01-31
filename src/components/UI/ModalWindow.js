
function ModalWindow(props) {
    return (
        <>
            <div class="fixed w-svw h-svh bg-black opacity-50 z-30" />
            <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1024px] bg-white z-40 min-h-[240px] p-14 rounded">
                <img onClick={props.onClose} src="/images/cross-black.svg" class="absolute w-10 right-10 top-8 hover:cursor-pointer" />
                <div className="text-center">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default ModalWindow;