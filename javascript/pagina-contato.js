document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
    
    const toggleFormButton = document.getElementById('toggleFormButton');
    const contactForm = document.getElementById('contactForm');
    
    toggleFormButton.addEventListener('click', function() {
        if (contactForm.style.display === 'none' || contactForm.style.display === '') {
            contactForm.style.display = 'flex';  // Alterado de 'block' para 'flex'
            toggleFormButton.textContent = 'Ocultar Formulário';
        } else {
            contactForm.style.display = 'none';
            toggleFormButton.textContent = 'Mostrar Formulário';
        }
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;

        if (!email || !name || !date || !message) {
            event.preventDefault();
            alert('Todos os campos são obrigatórios!');
        }
    });
});
