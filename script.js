
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

function sendWhatsApp(){
    var phonenumber = "+5511953904674";

    var nome = document.querySelector(".nome").value;
    var email = document.querySelector(".email").value;
    var telefone = document.querySelector(".telefone").value;
    var menssagem = document.querySelector(".menssagem").value;

    if(nome === '' || email === '' || menssagem === ''){
        e.preventDefault();
        alert('Por favor, preencha todos os campos!');
        };

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Nome:* "+nome+"%0a"
    +"*Email:* "+email+"%0a"
    +"*Telefone:* "+telefone+"%0a"
    +"*Menssagem:* "+menssagem

    window.open(url, '_blank').focus();

}