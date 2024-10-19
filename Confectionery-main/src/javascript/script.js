$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('#header');
    const home = document.querySelector('#home');

    // Função para verificar e adicionar a classe 'visible'
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.8; // Ponto onde os elementos devem aparecer
        const homeTop = home.getBoundingClientRect().top;
        const headerTop = header.getBoundingClientRect().top;

        // Adiciona a classe 'visible' ao header se ele estiver na área de visualização
        if (headerTop < triggerBottom) {
            
            header.classList.add('visible');
        }

        // Adiciona a classe 'visible' à seção home se ela estiver na área de visualização
        if (homeTop < triggerBottom) {
            home.classList.add('visible');
        }
    };

    // Chama a função para adicionar 'visible' ao carregar a página
    checkVisibility();

    // Verifica a visibilidade ao rolar
    document.addEventListener("scroll", checkVisibility);
});





document.addEventListener("scroll", function() {
    const homes = document.querySelectorAll('#menu'); // Se você tiver mais de um elemento com essa ID, considere usar uma classe
    const triggerBottom = window.innerHeight * 0.8; // Ponto onde os elementos devem aparecer

    homes.forEach(home => {
        const homeTop = home.getBoundingClientRect().top;

        if (homeTop < triggerBottom) {
            home.classList.add('visible'); // Use 'home' aqui
        }
    });
});

document.addEventListener("scroll", function() {
    const homes = document.querySelectorAll('#testimonials'); // Se você tiver mais de um elemento com essa ID, considere usar uma classe
    const triggerBottom = window.innerHeight * 0.8; // Ponto onde os elementos devem aparecer

    homes.forEach(home => {
        const homeTop = home.getBoundingClientRect().top;

        if (homeTop < triggerBottom) {
            home.classList.add('visible'); // Use 'home' aqui
        }
    });
});


