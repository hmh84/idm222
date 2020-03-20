// Nav

const navToggle = document.querySelector('#toggleButton');
const nav = document.querySelector('nav');
const navBckRnd = document.querySelector('#navBack');

navToggle.addEventListener('click', () => {
    if (nav.hasAttribute('id')) {
        
        nav.removeAttribute('id');
        navBckRnd.hidden = true;
    }
    else {
        nav.setAttribute('id', 'navActive');
        navBckRnd.hidden = false;
    }
})

navBckRnd.addEventListener('click', () => {
    nav.removeAttribute('id');
    navBckRnd.hidden = true;
});