// const button = document.querySelector('.burger');

// button.addEventListener('click', function(){
//     button.classList.toggle('active');
//     document.querySelector('nav').classList.toggle('off');
// })

$('.burger').on('click', function() {
    $('.burger').toggleClass('active');
    $('nav').toggleClass('off');
})