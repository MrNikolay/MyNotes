const btn = document.querySelector('.btn');

let isMenuUpen = false;

btn.addEventListener('click', function() {
    isMenuUpen = !isMenuUpen;
    btn.className = `btn ${isMenuUpen ? 'active' : 'not-active'}`
});

// var btn = $('.btn');

// btn.on('click', function() {
//   $(this).toggleClass('active not-active');
// });