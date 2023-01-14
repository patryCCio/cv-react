const menuButton = document.querySelector('.burger');


const changeStatus = () => {
    menuButton.classList.toggle('active');
    document.querySelector('.wrapper').classList.toggle('active');
}

menuButton.addEventListener('click', changeStatus);

// $('.burger').on('click', function() {
//     $('.burger, .wrapper').toggleClass('active');
// })