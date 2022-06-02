const menuButton = document.querySelector('.burger');


const changeStatus = () => {
    menuButton.classList.toggle('active');
}

menuButton.addEventListener('click', changeStatus);