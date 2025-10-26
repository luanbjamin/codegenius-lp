// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Seletores Otimizados ---
    const form = document.getElementById('free-trial-form');
    // Seleciona EXPLICITAMENTE o botão principal da Hero Section
    const primaryCtaButton = document.querySelector('.cta-button.primary-cta');
    const targetSection = document.getElementById('cta-final');
    const emailInput = document.getElementById('email');

    // 1. Lógica do Formulário (Simulação de Envio)
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = emailInput.value;

            // Validação de e-mail simples
            if (!email || !email.includes('@') || email.length < 5) {
                alert('Por favor, insira um e-mail válido para começar seu teste!');
                emailInput.focus();
                return;
            }

            console.log('E-mail capturado:', email);
            alert(`Sucesso! O link do seu teste gratuito (SIMULADO) foi enviado para: ${email}.`);
            form.reset();
        });
    }

    // 2. Lógica de Interação: Rolagem Suave
    if (primaryCtaButton && targetSection) {
        primaryCtaButton.addEventListener('click', function(e) {
            
            // CHAVE: Previne a ação padrão para que a rolagem funcione
            e.preventDefault(); 
            
            // Rolagem suave para o alvo
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Foca o input após um pequeno atraso (para garantir que a rolagem comece)
            if (emailInput) {
                setTimeout(() => emailInput.focus(), 300); 
            }
        });
    } else {
        // Log de erro no console caso o botão ou a seção final não sejam encontrados
        console.error("ERRO: Elementos de Rolagem (primary-cta ou cta-final) não foram encontrados. Verifique IDs e Classes no HTML.");
    }
});