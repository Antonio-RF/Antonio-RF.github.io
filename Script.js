document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(item => {
        let timeout;

        item.addEventListener('mouseenter', () => {
            
            clearTimeout(timeout);
            const dropdownMenu = item.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'block'; 
        });

        item.addEventListener('mouseleave', () => {
            const dropdownMenu = item.querySelector('.dropdown-menu');
            
            timeout = setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 500); 
        });
    });
});

const certificates = document.querySelectorAll('.certificate');
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.close');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
       
            const imgSrc = cert.querySelector('img').src; 
            modal.style.display = "block"; 
            modalImage.src = imgSrc; 
            caption.textContent = cert.querySelector('p').textContent; 
         });
    });

    closeModal.addEventListener('click', () => {
       modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
        modal.style.display = "none";
         }
    });
