// Проверка анимаций
// const closingHeaderAnimation = document.getElementById('closing-header-animation');
const littleHeader = document.querySelector('.little-header');
const bigHeader = document.getElementById('big-header');

// closingHeaderAnimation.id = '';
littleHeader.hidden = true;

let isMenuOpen = true;

function checkScroll() {
    const y = window.scrollY;
    if (isMenuOpen && y > 100) {
        // Закрываем хэдер
        bigHeader.style.opacity = '0';
        isMenuOpen = false;
        littleHeader.hidden = false;
        littleHeader.classList.remove('close');
        littleHeader.classList.add('open');
        // closingHeaderAnimation.id = 'closing-header-animation';
    } else if (!isMenuOpen && y < 100) {
        bigHeader.style.opacity = '1';
        isMenuOpen = true;
        // closingHeaderAnimation.id = '';
        littleHeader.classList.remove('open');
        littleHeader.classList.add('close');
    }
}

document.addEventListener('scroll', checkScroll);