document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const errorDiv = document.getElementById('error');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!validateEmail(email) || password.length < 6) {
            errorDiv.style.display = 'block'; // Exibe a mensagem de erro
            errorDiv.textContent = 'Preencha todos os campos corretamente.';
        } else {
            errorDiv.style.display = 'none'; // Esconde a mensagem de erro
            successModal.show(); // Exibe o modal de sucesso
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
