// Captura o evento de envio do formulário
document.querySelector('form').addEventListener('submit', async (event) => {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault();

    // Coleta os dados do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Cria o objeto com os dados do formulário
    const formData = { name, email, message };

    try {
        // Envia os dados para o servidor
        const response = await fetch('http://localhost:3000/api/formulario', { // Use o endereço completo
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status} - ${response.statusText}`);
        }

        // Converte a resposta para JSON
        const result = await response.json();

        // Exibe uma mensagem de sucesso
        alert(result.message);
    } catch (error) {
        // Exibe um erro caso algo dê errado
        console.error('Erro ao enviar os dados:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    }
});
