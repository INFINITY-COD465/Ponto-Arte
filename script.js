
// menu mobile //

const hamburger = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay-menu');
const meuMenu = document.querySelector('.nav-list');


// APLICAR O OVERLAY AO CLICAR NO MENU//
hamburger.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

// REMOVER O OVERLAY AO CLICAR NO MENU//
hamburger.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

// TIRAR O OVERLAY AO CLICAR NOS LINKS //
meuMenu.addEventListener('click', (e) => {
    overlay.classList.remove('active');
  
});

window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 250)
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.navList.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();


// SLIDER CARD //


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
        delay:200
})
revelar.reveal('.efeito-especialidades2',
    {
        duration: 1000,
        distance: '90px',
        delay:400
})
revelar.reveal('.efeito-especialidades3',
    {
        duration: 1000,
        distance: '90px',
        delay:600
})
revelar.reveal('.efeito-especialidades4',
    {
        duration: 1000,
        distance: '90px',
        delay:800
})
revelar.reveal('.efeito-especialidades5',
    {
        duration: 1000,
        distance: '90px',
        delay:1000
})
revelar.reveal('.efeito-especialidades6',
    {
        duration: 1000,
        distance: '90px',
        delay:1200
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
        origin: 'bottom'
})
revelar.reveal('.video-sobre',
    {
        duration: 2000,
        distance: '90px',
        delay:100,
        origin: 'bottom'
})

// EFEITO TRABALHO //

revelar.reveal('.efeito-img1',
    {
        duration: 900,
        distance: '320px',
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
        distance: '320px',
        delay:500,
        origin: 'left'
})

// EFEITO FORMULARIO //

revelar.reveal('.efeito-formulario1',
    {
        duration: 500,
        distance: '90px',
        delay:50,
        origin: 'right'
})

revelar.reveal('.efeito-formulario2',
    {
        duration: 500,
        distance: '90px',
        delay:100,
        origin: 'right'
})

revelar.reveal('.efeito-formulario3',
    {
        duration: 500,
        distance: '90px',
        delay:200,
        origin: 'right'
})

revelar.reveal('.efeito-formulario4',
    {
        duration: 500,
        distance: '90px',
        delay:300,
        origin: 'right'
})

revelar.reveal('.efeito-formulario5',
    {
        duration: 500,
        distance: '90px',
        delay:400,
        origin: 'right'
})

const telaPequena = window.matchMedia('(max-width: 768px)').matches;

if (telaPequena) {
    window.revelar = ScrollReveal({reset:true})

    // EFEITOS DE ROLAGEM //
window.revelar = ScrollReveal({reset:true})


// TOPO DO SITE //
revelar.reveal('.efeito-txt-topo',
    {
        duration: 1000,
        distance: '20px',
        origin:'bottom',
        delay: 0

})

// TITULOS DAS SESSÕES //

revelar.reveal('.titulo',
    {
        duration: 1000,
        distance: '20px',
        origin:'bottom',
        delay: 0

})

// SESSÃO ESPECIAÇIDADES //


revelar.reveal('.efeito-especialidades1',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades2',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades3',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades4',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades5',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades6',
    {
        duration: 500,
        distance: '10px',
        delay:100
})

// EFEITO FASES DO TRABALHO

revelar.reveal('.efeito-especialidades6',
    {
        duration: 500,
        distance: '10px',
        delay:100
})
revelar.reveal('.efeito-especialidades6',
    {
        duration: 500,
        distance: '10px',
        delay:100
})


// SESSÃO SOBRE //

revelar.reveal('.efeito-img-sobre',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'left'
})

revelar.reveal('.efeito-txt-sobre',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'bottom'
})

// EFEITO TRABALHO //

revelar.reveal('.efeito-img1',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})
revelar.reveal('.efeito-img2',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'bottom'
})
revelar.reveal('.efeito-img3',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'left'
})

// EFEITO FORMULARIO //

revelar.reveal('.efeito-formulario1',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})

revelar.reveal('.efeito-formulario2',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})

revelar.reveal('.efeito-formulario3',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})

revelar.reveal('.efeito-formulario4',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})

revelar.reveal('.efeito-formulario5',
    {
        duration: 500,
        distance: '10px',
        delay: 0,
        origin: 'right'
})
}


// BOTÃO FLUTUANTE WHATSAPP //

const botaoWhatsapp = document.getElementById('whatsapp');

botaoWhatsapp.addEventListener('click', () => {
  const numeroTelefone = '5511949995382';
  const mensagem = 'Olá, gostaria de saber mais informações!';

  const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsapp, '_blank');
});


