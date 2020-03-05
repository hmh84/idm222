const toggleButton = document.querySelector('#toggleButton');
const nav = document.querySelector('nav');
const navBckRnd = document.querySelector('#navBack');

toggleButton.addEventListener('click', () => {
    nav.setAttribute('id', 'navActive');
    navBckRnd.hidden = false;
})

navBckRnd.addEventListener('click', () => {
    nav.removeAttribute('id');
    navBckRnd.hidden = true;
});

const resumeImg = document.querySelector('#resume img');

resumeImg.addEventListener('mouseover', () => {
    resumeImg.src = ('graphics/resumeColor.jpg');
});

resumeImg.addEventListener('mouseout', () => {
    resumeImg.src = ('graphics/resumeGray.jpg');
});