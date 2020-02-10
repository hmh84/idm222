document.querySelector('#toggleButton').addEventListener('click', toggleNav);

function toggleNav() {
    var element = document.querySelector(".nav");
    element.classList.toggle("navActive");
}
