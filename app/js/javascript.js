document.querySelector('#toggleButton').addEventListener('click', toggleNav);

function toggleNav() {
    var element = document.querySelector('.nav');
    element.classList.toggle('navActive');
    document.querySelector('.navBack').removeAttribute('hidden');
}

document.querySelector('.navBack').addEventListener('click', navBackHidden);

function navBackHidden() {
    toggleNav();
    document.querySelector('.navBack').hidden = true;

}
