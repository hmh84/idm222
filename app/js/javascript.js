document.querySelector('.toggleButton').addEventListener('click', toggleSideBar);

function toggleSideBar() {
    var element = document.getElementById("nav");
    element.classList.toggle("sideBar_active");
}
