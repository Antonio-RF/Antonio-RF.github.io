// Função para ajustar o scroll ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Pega o ID da seção alvo
        const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

        if (targetSection) {
            // Calcula a posição central da seção
            const offset = targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.offsetHeight / 2);
            
            // Rola a página até a posição central da seção
            window.scrollTo({
                top: offset,
                behavior: 'smooth' // Rola suavemente
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll('.certificate');
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const closeModal = document.querySelector('.close');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            const imgSrc = cert.querySelector('img').src; // Captura o src da imagem clicada
            modal.classList.add('show'); // Add the 'show' class to the modal
            modalImage.src = imgSrc; // Atribui a imagem ao modal
            caption.textContent = cert.querySelector('p').textContent; // Adiciona a descrição ao modal
        });
    });    

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show'); // Fecha o modal ao remover a classe 'show'
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show'); // Fecha o modal ao clicar fora dele
        }
    });
});

let index = 1;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = items[0].clientWidth;


carousel.style.transform = `translateX(${-index * itemWidth}px)`;

function moveSlide(direction) {
    index += direction;
    
    carousel.style.transition = "transform 0.4s ease-in-out";
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;

    carousel.addEventListener("transitionend", () => {
        if (index === totalItems - 1) {
            index = 1; 
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        } 
        else if (index === 0) { 
            index = totalItems - 2;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        }
    });
}

function autoMoveSlide() {
    moveSlide(1);
}

let autoSlideInterval = setInterval(autoMoveSlide, 5000);

carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoMoveSlide, 5000);
});

