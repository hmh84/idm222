document.querySelector('.toggleButton').addEventListener('click', toggleSideBar);

function toggleSideBar() {
    var element = document.getElementById("sideBar");
    element.classList.toggle("sideBar_active");
}