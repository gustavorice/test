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

A direção visual (laranja, verde claro e grafite), o lettering e as ilustrações são propostas. Os arquivos de imagem do Instagram ainda retornam HTTP 403, portanto falta conferir logo, cores e fotos oficiais antes de publicar. As ilustrações são autorais e não representam estoque ou modelos específicos.

Os botões de contato abrem o WhatsApp comercial confirmado: (19) 99690-1954. O mapa incorporado usa Rua 9, 2419 — Rio Claro/SP, confirmado em duas legendas. Confira visualmente a localização geocodificada antes de publicar. Se o provedor de mapas estiver indisponível, o endereço escrito e o link de rota continuam acessíveis.

Não foram adicionados preços, avaliações ou horários não confirmados. As referências de fabricantes não foram apresentadas como marcas vendidas pela loja.

## Validação

Build de produção e navegação funcional em Chromium. Conferir filtros, menu móvel, links e controle de animações. A interface respeita `prefers-reduced-motion`; o controle de pausa interrompe os movimentos contínuos. Não há backend, formulário de coleta ou checkout.

## Publicação

O workflow `.github/workflows/deploy.yml` instala dependências, gera `dist` e publica no GitHub Pages a cada push em `main`. O repositório precisa ter Pages habilitado com origem GitHub Actions. O `base` relativo do Vite permite servir o site no subdiretório do repositório. A URL pública só deve ser informada como disponível após a conclusão do deploy e uma requisição HTTP bem-sucedida.
