# Ki-Oferta App

Aplicação mobile desenvolvida com Capacitor, Vite e JavaScript moderno para ofertas comunitárias em mercados locais.

---

## Parte A · Pesquisa sobre o Framework CSS

**Framework escolhido:** [Microframework CSS BEM (Pensebem)](https://pensebem.faustinopsy.com/)

### A1. O que é o framework e qual abordagem ele segue?
O **Microframework CSS (Pensebem)** é uma solução de estilização ultraleve voltada ao alto desempenho e estruturação semântica, pesando aproximadamente 12.4 KB minificado. Ele segue uma abordagem de componentes modulares estruturados estritamente sob a metodologia **BEM (Block, Element, Modifier)**, separando o código em blocos independentes (`bem-card`), elementos internos (`bem-card__body`) e modificadores de estado/aparência (`bem-card--flat`), além de utilizar Variáveis CSS nativas (*CSS Custom Properties*) para alternância dinâmica de temas (como Dia, Tarde e Noite) com zero dependência obrigatória de JavaScript.

### A2. Como você incluiu o framework na página?
A inclusão foi realizada por meio de importação de arquivo local: o arquivo minificado `microframework.min.css` foi baixado diretamente da distribuição oficial e armazenado no diretório `src/css/` do projeto; em seguida, no arquivo `src/index.html`, inseriu-se a tag `<link rel="stylesheet" href="./css/microframework.min.css" />` dentro do `<head>`, posicionada imediatamente antes da folha de estilos personalizada (`style.css`), garantindo carregamento local, pleno funcionamento offline e evitando dependência de conexões externas (CDN) em ambiente móvel.

### A3. Cite três benefícios que você percebeu ao usar, não apenas os que o site do framework anuncia.
1. **Previsibilidade e manutenção do código**: a convenção BEM previne colisões acidentais de escopo no CSS, permitindo identificar com exatidão a função de cada classe no HTML mesmo em projetos que crescem rapidamente.
2. **Facilidade para temas e personalização**: o uso intensivo de variáveis no seletor raiz (`:root`) e seletores `[data-theme]` possibilita customizar cores, tipografia e espaçamentos sem a necessidade de sobrescrever regras complexas ou usar pré-processadores pesados.
3. **Agilidade de renderização em dispositivos móveis**: por ter menos de 14 KB, o arquivo CSS é transmitido dentro do primeiro pacote TCP (*initial congestion window*), eliminando gargalos de renderização (*render blocking*) em conexões 3G/4G e entregando uma inicialização quase instantânea no aplicativo Capacitor.

### A4. Cite duas limitações ou desvantagens.
1. **Catálogo restrito de componentes complexos**: por priorizar o minimalismo, o framework disponibiliza cerca de 9 componentes fundamentais; elementos de interface mais avançados (como seletores de data/hora, carrosséis ou menus sanfona animados) requerem desenvolvimento do zero ou inclusão de bibliotecas adicionais.
2. **Verbosidade nas classes do HTML**: a rigidez da convenção BEM resulta em classes longas (por exemplo, `bem-theme-toggle__btn--active`), o que aumenta o volume de digitação e a extensão das tags no código-fonte comparado a classes atômicas ou utilitárias curtas.

### A5. Abra o CSS do framework (ou inspecione um elemento no DevTools F12). Ele estiliza usando classes ou IDs? Por que você acha que frameworks preferem um dos dois?
Ao analisar o arquivo `microframework.min.css`, constata-se o uso exclusivo de **classes** (como `.bem-btn`, `.bem-card` e `.bem-grid`) para aplicação dos estilos, sem recorrer a seletores de ID (`#id`). Os frameworks adotam classes por duas razões essenciais: **reutilização**, pois uma classe pode ser associada a múltiplos elementos na mesma página (enquanto um ID deve ser estritamente único no DOM), e **especificidade equilibrada**, uma vez que IDs possuem peso de especificidade muito alto no CSS, o que dificultaria ao desenvolvedor sobrescrever ou estender os estilos pré-definidos sem recorrer a artifícios prejudiciais como `!important`.

### A6. Fontes
* **Documentação Oficial:**
  * **Título:** Documentação — Microframework CSS BEM
  * **Endereço:** https://pensebem.faustinopsy.com/
  * **Data de acesso:** 16 de setembro de 2026.
* **Metodologia BEM:**
  * **Título:** BEM — Block Element Modifier (Quick Start Guide)
  * **Endereço:** https://en.bem.info/methodology/quick-start/
  * **Data de acesso:** 16 de setembro de 2026.
* **Especificidade no CSS:**
  * **Título:** Especificidade — CSS: Folhas de Estilo em Cascata | MDN Web Docs
  * **Endereço:** https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity
  * **Data de acesso:** 16 de setembro de 2026.

---

## Instruções de Execução

Este app foi criado utilizando [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app).

### Rodando o projeto

Para rodar em ambiente de desenvolvimento local:

```bash
npm run dev
```

Ou para pré-visualizar a build:

```bash
npm run preview
```
