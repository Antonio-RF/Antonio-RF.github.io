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

let index = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    index += direction;

    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }

    const itemWidth = items[0].clientWidth; 
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}
