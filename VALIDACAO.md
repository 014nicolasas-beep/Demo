# Validação da demonstração

Verificação em Chromium local com Playwright:

- Larguras: 360, 390, 768, 1024 e 1440 pixels; sem transbordamento horizontal.
- Menu mobile: abre, navega e fecha.
- Busca por produto, estado vazio, limpeza e filtros: aprovados.
- Oito categorias e 35 produtos acessíveis; botão para expandir catálogo: aprovado.
- Detalhes do produto e fechamento com Escape: aprovados.
- Ambos os vídeos: metadados 360 × 640, reprodução avança e para ao fechar.
- Imagens locais carregadas; nenhuma falha HTTP ou erro JavaScript na execução final.
- Unidade principal: endereço informado pelo usuário e link do mapa incluídos.
- Capturas de celular e desktop inspecionadas visualmente.

Limitações: não foram testados Safari/iOS ou Firefox, nem publicação remota. Não houve verificação independente de endereço, estoque, horários ou redes sociais. O proxy de saída da máquina está inacessível; o projeto não depende de recursos externos para renderizar. A configuração do Netlify está preparada, mas o deploy precisa ser realizado em uma conta de hospedagem.
