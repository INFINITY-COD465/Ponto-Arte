
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
    var phonenumber = "+5511949995382";

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

// EFEITOS DE ROLAGEM //
window.revelar = ScrollReveal({reset:true})


// TOPO DO SITE //
revelar.reveal('.efeito-txt-topo',
    {
        duration: 2000,
        distance: '90px'

})

// TITULOS DAS SESSÕES //

revelar.reveal('.titulo',
    {
        duration: 2000,
        distance: '90px'

})

// SESSÃO ESPECIAÇIDADES //


revelar.reveal('.efeito-especialidades1',
    {
        duration: 1000,
        distance: '90px',
        delay:500
})
revelar.reveal('.efeito-especialidades2',
    {
        duration: 1000,
        distance: '90px',
        delay:1000
})
revelar.reveal('.efeito-especialidades3',
    {
        duration: 1000,
        distance: '90px',
        delay:1500
})
revelar.reveal('.efeito-especialidades4',
    {
        duration: 1000,
        distance: '90px',
        delay:2000
})
revelar.reveal('.efeito-especialidades5',
    {
        duration: 1000,
        distance: '90px',
        delay:2500
})
revelar.reveal('.efeito-especialidades6',
    {
        duration: 1000,
        distance: '90px',
        delay:3000
})

// SESSÃO SOBRE //

revelar.reveal('.efeito-img-sobre',
    {
        duration: 2000,
        distance: '90px',
        delay:500,
        origin: 'left'
})

revelar.reveal('.efeito-txt-sobre',
    {
        duration: 2000,
        distance: '90px',
        delay:1000,
        origin: 'right'
})

// EFEITO TRABALHO //

revelar.reveal('.efeito-img1',
    {
        duration: 900,
        distance: '800px',
        delay:500,
        origin: 'right'
})
revelar.reveal('.efeito-img2',
    {
        duration: 900,
        distance: '90px',
        delay:1000,
        origin: 'bottom'
})
revelar.reveal('.efeito-img3',
    {
        duration: 900,
        distance: '800px',
        delay:500,
        origin: 'left'
})

// EFEITO FORMULARIO //

revelar.reveal('.efeito-formulario1',
    {
        duration: 500,
        distance: '90px',
        delay:200,
        origin: 'right'
})

revelar.reveal('.efeito-formulario2',
    {
        duration: 500,
        distance: '90px',
        delay:400,
        origin: 'right'
})

revelar.reveal('.efeito-formulario3',
    {
        duration: 500,
        distance: '90px',
        delay:600,
        origin: 'right'
})

revelar.reveal('.efeito-formulario4',
    {
        duration: 500,
        distance: '90px',
        delay:800,
        origin: 'right'
})

revelar.reveal('.efeito-formulario5',
    {
        duration: 500,
        distance: '90px',
        delay:1000,
        origin: 'right'
})