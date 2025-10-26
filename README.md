💻 CodeGenius: O Assistente de Código IA (Landing Page de Alta Performance)
Uma landing page imersiva e responsiva desenvolvida para simular a venda de um produto SaaS (Software as a Service) de inteligência artificial focado em produtividade para desenvolvedores.

O foco principal deste projeto foi explorar:

Performance: Uso de recursos avançados como vídeo de fundo otimizado e estratégias de carregamento de CSS.

Design System: Implementação de um tema "Neon Tech" consistente usando variáveis CSS para cores e sombras.

User Experience (UX): Interações fluidas (Rolagem Suave) e feedback imediato ao usuário (Banner de Sucesso com transição CSS).

🚀 Tecnologias Utilizadas

Categoria: Tecnologia
Estrutura: HTML5 (Semântico)
Estilização: CSS3 (Puro) + Variáveis CSS (:root)
Interatividade: JavaScript (ES6+ para UX e validação simples)
Assets: Imagens WebP/JPG com <picture> e Vídeo MP4/WebM.

✨ Principais Destaques Técnicos
Este não é apenas um HTML e CSS básico. Fui além para garantir uma experiência de ponta:

Imersão Visual com Vídeo de Fundo:

Utilizei um vídeo em loop (com fallback .webm e .mp4) e o fixei no z-index: -2 para criar um background dinâmico sem prejudicar a leitura.

Apliquei um background-color semi-transparente no wrapper (.site-content-wrapper) para garantir que o texto claro permaneça legível sobre o vídeo escuro.

Performance e Carregamento de Estilos:

Simulei a otimização de performance usando o atributo media="print" e o handler onload no <link> do CSS externo. Isso garante que o navegador carregue o CSS em baixa prioridade após renderizar o conteúdo crítico, acelerando o First Contentful Paint (FCP), conforme boas práticas de Web Vitals.

Design System Baseado em Variáveis:

Defini todas as cores e, principalmente, os efeitos de brilho neon (--shadow-neon-blue, --accent-magenta) em um bloco :root. Isso torna a manutenção e a alteração da paleta de cores extremamente rápida e consistente em todos os CTAs e cards.

JavaScript para Experiência do Usuário (UX):

Rolagem Suave: O botão principal na seção Hero utiliza scrollIntoView({ behavior: 'smooth' }) para rolar suavemente até o formulário final.

Feedback Profissional: O envio do formulário é uma simulação que exibe um banner de sucesso (com transição top) em vez do alert padrão, melhorando o look and feel da aplicação.

⚙️ Como Visualizar Localmente

1. Clone o Repositório:

git clone

```bash
git clone https://github.com/luanbjamin/codegenius-lp.git

2. Navegue até a Pasta:
cd codegenius-lp (Se o nome do seu diretório for o mesmo do repositório, mantenha. Se não, use cd nome-do-repo.)

3. Abra o index.html:

A maneira mais fácil é usar a extensão Live Server no VS Code.

Alternativamente, abra o arquivo index.html diretamente no seu navegador.

📸 Demonstração ao Vivo

**Acesse a Landing Page em funcionamento aqui:**
CodeGenius Demo Live https://luanbjamin.github.io/codegenius-lp/