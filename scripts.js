document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('meuFormulario');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-enviar');
            
            // Feedback visual de envio
            btn.innerText = "Enviando...";
            btn.style.opacity = "0.7";

            setTimeout(() => {
                alert('Sua mensagem foi tecida com sucesso! Entraremos em contato em breve.');
                formulario.reset();
                btn.innerText = "Enviar Mensagem";
                btn.style.opacity = "1";
            }, 1500);
        });
    }
});
