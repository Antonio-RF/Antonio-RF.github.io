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

let index = 1; // Começamos a partir da 2ª imagem (posição 1)
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemWidth = items[0].clientWidth;

// Posicionamos no primeiro item real (ignorando o clone no início)
carousel.style.transform = `translateX(${-index * itemWidth}px)`;

function moveSlide(direction) {
    index += direction;
    
    carousel.style.transition = "transform 0.4s ease-in-out";
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;

    // Criamos um evento para detectar quando a transição termina
    carousel.addEventListener("transitionend", () => {
        if (index === totalItems - 1) { // Se estiver no clone final (depois do último)
            index = 1; // Volta para o primeiro real
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        } 
        else if (index === 0) { // Se estiver no clone inicial (antes do primeiro)
            index = totalItems - 2; // Volta para o último real
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        }
    });
}

