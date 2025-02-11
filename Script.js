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
