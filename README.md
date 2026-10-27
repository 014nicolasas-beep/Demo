# Rancho Toro — demonstração comercial DSAI

Protótipo estático em HTML, CSS e JavaScript. Não é o site oficial da empresa. Não contém preços, carrinho, pagamentos, autenticação nem banco de dados.

## Executar

Na pasta do projeto:

```sh
python3 -m http.server 8000
```

Abra o endereço local informado pelo servidor. Não há dependências de instalação ou etapa de compilação. Imagens, fontes e vídeos são locais.

## Publicar no Netlify

1. Entre ou crie sua conta em https://app.netlify.com/.
2. Use a opção de adicionar um projeto por deploy manual (ou https://app.netlify.com/drop).
3. Extraia `rancho-toro-netlify.zip` e envie a pasta que contém `index.html`, `assets`, `styles.css`, `polish.css`, `products.js` e `app.js`.
4. Aguarde o deploy e abra o endereço HTTPS gerado pelo Netlify. O nome pode ser alterado nas configurações do projeto.
5. Verifique no endereço público o menu mobile, os filtros, os detalhes e os dois vídeos.

Se conectar este projeto pelo Git, `netlify.toml` já define a publicação da raiz, sem comando de build. O arquivo `_headers` também aplica os cabeçalhos em uploads manuais. Não envie `.git`, anexos originais, testes ou capturas de tela.

A publicação precisa ser feita em uma conta Netlify. Nenhum endereço público foi gerado automaticamente nesta entrega.

## Alterações rápidas

- **Telefone:** `SITE.phone` e `SITE.phoneLabel` no início de `products.js`. Todos os links de WhatsApp usam essa configuração em tempo de execução.
- **Catálogo:** `products.js`. Fotos ilustrativas genéricas são associadas por produto, enquanto os kits e cervejas preservam fotos fornecidas.
- **Textos, lojas e navegação:** `index.html`.
- **Visual original:** `styles.css`; acabamento e ajustes responsivos em `polish.css`.
- **Interações:** `app.js`.
- **Vídeos:** `assets/institucional.mp4` e `assets/eventos.mp4`, ambos 360 × 640 (9:16). Carregam metadados somente ao abrir o player; a reprodução começa pelo controle do visitante.

As fotografias ilustrativas novas foram geradas por IA para esta demonstração, sem embalagens de marca inventadas. São organizadas em folhas fotográficas locais e exibidas por recorte CSS; cada produto genérico usa uma fotografia do seu tipo. Cortes próximos podem compartilhar uma imagem representativa. As imagens dos kits e cervejas são referências originais fornecidas e não confirmam estoque atual.

## Dados que ainda precisam de confirmação

- Endereço principal informado pelo cliente: Av. Padre Jaime, 2350 — Vila Ricci, Mogi Guaçu — SP, CEP 13844-070. Incluído com link de mapa; não foi realizada verificação independente.
- Campinas: endereço não fornecido; o botão pede confirmação pelo WhatsApp.
- Telefone provisório: (19) 97407-9801.
- Horários, disponibilidade, composição dos kits, serviços, redes sociais e afirmação de sete anos de história devem ser confirmados pela empresa antes de uso oficial. O texto de sete anos foi preservado do material fornecido.

`robots.txt`, metadados e cabeçalhos solicitam que buscadores não indexem a demonstração. Isso não restringe o acesso: quem tiver o link poderá abrir o site. As fontes locais incluem suas licenças em `licenses/`.
