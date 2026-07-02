# Super Clean JP — Site institucional

Site institucional em **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**, otimizado para conversão de leads via WhatsApp e SEO local (João Pessoa - PB).

---

## 1. Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

---

## 2. Como colocar no ar (deploy)

O jeito mais simples é a **Vercel** (criadora do Next.js, plano gratuito):

1. Crie uma conta em vercel.com (pode usar GitHub).
2. Suba este projeto para um repositório no GitHub (ou GitLab/Bitbucket).
3. Na Vercel, clique em "Add New Project" e importe o repositório.
4. A Vercel detecta o Next.js automaticamente — não precisa configurar nada. Clique em "Deploy".
5. Em poucos minutos você recebe uma URL pública (ex: `superclean-jp.vercel.app`).
6. Depois, em "Settings > Domains", você pode apontar seu domínio próprio (ex: `supercleanjp.com.br`).

---

## 3. ⚠️ Pendências de conteúdo (placeholders)

Como nenhuma foto real ou depoimento foi enviado, o site foi construído com **conteúdo ilustrativo/placeholder**, claramente sinalizado no código. Antes de divulgar o site oficialmente, atualize:

| O quê | Onde | O que fazer |
|---|---|---|
| **Fotos antes/depois** | `components/BeforeAfterSlider.tsx` | Hoje usa ilustrações SVG (tecido "sujo" vs "limpo"). Troque `<DirtyFabric />` e `<CleanFabric />` por `<Image src="/images/antes-1.jpg" .../>` e `<Image src="/images/depois-1.jpg" .../>` com fotos reais dos seus atendimentos. |
| **Depoimentos** | `components/Testimonials.tsx` | Array `TESTIMONIALS` tem nomes e textos fictícios. Substitua por depoimentos reais (idealmente com print do WhatsApp ou avaliação do Google como prova). |
| **Feed do Instagram** | `components/InstagramSection.tsx` | Hoje mostra blocos coloridos decorativos. Para mostrar posts reais automaticamente, integre um widget como **SnapWidget**, **Elfsight** ou a API oficial da Meta, substituindo o array `PLACEHOLDER_POSTS`. |
| **Domínio do site** | `lib/constants.ts` → `BUSINESS.siteUrl` | Está como `https://www.supercleanjp.com.br` (placeholder). Atualize para o domínio real assim que registrado — isso afeta o SEO (sitemap, Open Graph, dados estruturados). |
| **Número de WhatsApp** | `lib/constants.ts` → `WHATSAPP_NUMBER` | Já configurado com `+55 83 8716-8492`. Confirme se está correto antes de publicar. |
| **Endereço/geolocalização** | `app/layout.tsx` → objeto `jsonLd` | As coordenadas (`latitude`/`longitude`) estão como o centro de João Pessoa. Ajuste para o endereço real da empresa, se houver um ponto fixo de atendimento. |

Nada disso quebra o site — ele funciona perfeitamente como está — mas o **conteúdo real aumenta muito a taxa de conversão** e a credibilidade.

---

## 4. Estrutura do projeto

```
app/
  layout.tsx        → metadata, SEO, JSON-LD (LocalBusiness), fontes
  page.tsx           → monta as seções da página
  sitemap.ts          → sitemap.xml dinâmico
  robots.ts           → robots.txt dinâmico
  manifest.ts         → manifest PWA (ícones mobile)
components/
  Header.tsx           → cabeçalho fixo + menu mobile
  Hero.tsx             → seção principal com CTA
  Benefits.tsx         → benefícios da higienização
  Services.tsx         → cards de serviços (cada um linka pro WhatsApp com mensagem própria)
  Differentials.tsx    → diferenciais competitivos
  BeforeAfterSlider.tsx→ slider interativo antes/depois (arrastável)
  BeforeAfterSection.tsx
  InstagramSection.tsx → "Veja nossos últimos trabalhos"
  Testimonials.tsx     → depoimentos
  FAQ.tsx              → perguntas frequentes (acordeão + dados estruturados FAQPage)
  FinalCTA.tsx          → banner final de conversão
  Footer.tsx            → rodapé
  WhatsAppFloat.tsx     → botão flutuante fixo
  WaveDivider.tsx        → divisor de seção em onda (SVG)
  HeroIllustration.tsx   → ilustração original inspirada na logo
  icons/InstagramIcon.tsx→ ícone Instagram (glifo genérico, pacote lucide-react atual não inclui ícones de marca)
lib/
  constants.ts          → TODOS os dados editáveis (WhatsApp, Instagram, textos, navegação)
public/
  logo.png               → logo original enviada
  icon-*.png, favicon.ico → ícones gerados a partir da logo
```

**Dica:** a maioria dos ajustes de texto/contato do dia a dia pode ser feita direto em `lib/constants.ts`, sem precisar mexer nos componentes.

---

## 5. SEO já implementado

- Metadata completo (title, description, keywords, Open Graph, Twitter Card).
- `sitemap.xml` e `robots.txt` gerados automaticamente.
- Dados estruturados **LocalBusiness** (Schema.org) em `layout.tsx` — ajuda o Google a mostrar o negócio em buscas locais ("higienização de estofados João Pessoa").
- Dados estruturados **FAQPage** na seção de perguntas frequentes.
- `manifest.webmanifest` para melhor experiência mobile/PWA.
- HTML semântico (`h1`/`h2`/`section`), texto alternativo em imagens.

Depois de publicar, recomenda-se:
1. Cadastrar o negócio no **Google Meu Negócio** (essencial para SEO local).
2. Submeter o site no **Google Search Console** e enviar o sitemap.
3. Pedir para clientes satisfeitos deixarem avaliação no Google.

---

## 6. Performance

Build gerado como páginas estáticas (`○ Static`), fontes self-hosted (sem dependência de rede externa em runtime), imagens otimizadas via `next/image`. Isso favorece boas notas no Lighthouse/PageSpeed. Ao adicionar fotos reais, mantenha-as comprimidas (formato WebP/AVIF, poucos MB) para não penalizar a performance.
