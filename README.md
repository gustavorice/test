# Danni Som

Landing page institucional em português, com Vite, JavaScript e CSS. Fontes e ilustrações são servidas pelo próprio projeto; nenhuma API ou credencial é necessária.

## Desenvolvimento

Requer Node.js 22.12+ (validado com 24.19.0) e npm.

```sh
cd /workspace/lp-dannisom
npm ci --ignore-scripts --cache /workspace/.npm-cache
npm run dev -- --port 5173
```

Build de produção: `npm run build`. Conferência do build: `npm run preview -- --port 4173`.

## Conteúdo e publicação

Dados comerciais em `src/store.js`. Nome, áreas de atuação, 26 anos, endereço e WhatsApp foram confirmados no perfil público e nas legendas da loja. Fontes e referências setoriais em [RESEARCH.md](RESEARCH.md).

A direção visual segue a referência de Instagram enviada pelo usuário: azul, amarelo, símbolo de áudio e tipografia com presença de loja. As fotos reais do perfil estão em `public/images/` e são servidas localmente, sem URLs de CDN que expiram. O logo foi tratado a partir das referências oficiais para uso com fundo transparente. A foto do grupo mantém o arquivo original do Instagram, com enquadramento e correção leve de cor em CSS para preservar as pessoas.

A navegação por departamento usa abas com suporte a clique, teclado (setas, Home e End), painel de imagem e contato contextual por WhatsApp. Os reels levam às publicações originais da loja. O botão de pausa e `prefers-reduced-motion` controlam as animações.

O mapa usa a busca comercial **Danni Som Rio Claro**, cuja resposta do Google confirmou R. 9, 2419 — Santana, Rio Claro/SP, CEP 13500-145. A query anterior, apenas com rua e número, apontava para Jardim Guanabara e foi substituída. Não use a query ambígua anterior.

Os botões de contato usam o WhatsApp comercial confirmado: (19) 99690-1954. Não foram adicionados preços, avaliações ou horários não confirmados. A referência ao Frahm Class corresponde a um evento publicado pela loja e não afirma certificação ou revenda autorizada.

## Validação

Build de produção e navegação funcional em Chromium. Conferir as cinco abas de departamento, teclado, menu móvel, links e controle de animações. A interface respeita `prefers-reduced-motion`; o controle de pausa interrompe os movimentos contínuos. Não há backend, formulário de coleta ou checkout.

## Publicação

O workflow `.github/workflows/deploy.yml` instala dependências, gera `dist` e publica no GitHub Pages a cada push em `main`. O repositório precisa ter Pages habilitado com origem GitHub Actions. O `base` relativo do Vite permite servir o site no subdiretório do repositório. A URL pública só deve ser informada como disponível após a conclusão do deploy e uma requisição HTTP bem-sucedida.
