document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. CONFIGURAÇÃO DA API ---
    // ATENÇÃO: Pegue um link novo no crudcrud.com e cole abaixo
    const API_URL = "https://crudcrud.com/api/5bed806726d14f70964c6f0294df4722/contatos";

    // --- ENVIAR FORMULÁRIO ---
    const formulario = document.querySelector('#meuFormulario');
    
    if (formulario) {
        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();

            const botao = formulario.querySelector('button');
            botao.innerText = "Enviando...";
            botao.disabled = true;

            const dados = {
                nome: document.querySelector('#nome').value,
                email: document.querySelector('#email').value,
                mensagem: document.querySelector('#mensagem').value,
                dataEnvio: new Date().toLocaleString('pt-BR')
            };

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });

                if (response.ok) {
                    alert('Mensagem enviada com sucesso para o CrudCrud!');
                    formulario.reset();
                } else {
                    alert('Erro ao enviar. Verifique se o link da API ainda é válido.');
                }
            } catch (erro) {
                console.error("Erro na requisição:", erro);
                alert('Erro de conexão com o servidor.');
            } finally {
                botao.innerText = "Enviar Mensagem";
                botao.disabled = false;
            }
        });
    }

    // --- MENU MOBILE ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar ao clicar nos links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});