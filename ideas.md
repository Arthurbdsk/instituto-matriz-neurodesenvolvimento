# Ideias de Design - Instituto Matriz de Neurodesenvolvimento

## Conceito Escolhido: **Minimalismo Científico com Acolhimento Humano**

### Design Movement
**Minimalismo Contemporâneo + Humanismo Digital**
Inspirado em interfaces de institutos de pesquisa de ponta (como Stanford, MIT) que combinam rigor científico com acessibilidade visual. O design evita excesso de ornamentação, mantendo foco absoluto na clareza e hierarquia da informação.

### Core Principles
1. **Clareza Hierárquica:** Cada elemento tem propósito definido. Títulos em negrito e tamanho generoso, corpo de texto legível e espaçamento generoso.
2. **Espaço Respeitoso:** Muito espaço em branco entre seções. Não há "poluição visual"—apenas conteúdo essencial e bem estruturado.
3. **Acolhimento Através da Tipografia:** Fontes humanizadas (Poppins para títulos, Inter para corpo) que transmitem profissionalismo sem frieza.
4. **Paleta Científica e Viva:** Azul profundo (confiança, ciência), verde suave (saúde, crescimento), com toques de branco e cinza claro.

### Color Philosophy
- **Azul Profundo (#1e3a8a ou similar):** Representa ciência, confiança e profissionalismo. Usado em títulos, botões principais e destaques.
- **Verde Suave (#10b981 ou similar):** Representa saúde, crescimento e esperança. Usado em CTAs secundárias e ícones.
- **Branco e Cinza Claro:** Fundo limpo, permitindo que o conteúdo respire. Cinza claro (#f3f4f6) para seções alternadas.
- **Cinza Escuro (#374151):** Texto principal, mantendo legibilidade sem ser preto puro (que é muito duro).

### Layout Paradigm
- **Hero Section Assimétrico:** Imagem/elemento visual à direita, texto à esquerda. Quebra a monotonia de layouts centralizados.
- **Seções Alternadas:** Conteúdo + Imagem, depois Imagem + Conteúdo. Cria ritmo visual natural.
- **Grid Flexível:** Cards em grid responsivo (1 coluna mobile, 2-3 desktop) com espaçamento generoso.
- **Navegação Âncora:** Menu fixo no topo com links para seções da página, facilitando navegação sem poluir com múltiplas páginas.

### Signature Elements
1. **Ícones Minimalistas:** Ícones simples e limpos (lucide-react) em cores da paleta. Cada ícone representa um valor ou serviço.
2. **Divisores Sutis:** Linhas finas em cinza claro separando seções, não blocos de cor pesados.
3. **Cards Elevados:** Cards com sombra suave (não border) para criar profundidade sem peso visual.

### Interaction Philosophy
- **Hover Suave:** Botões e cards mudam levemente de cor ou elevação ao passar o mouse.
- **Transições Fluidas:** Todas as mudanças de estado (hover, active) ocorrem com transição de 200-300ms.
- **Feedback Claro:** Botões clicáveis têm cursor pointer e mudam visualmente. Formulários têm validação clara.

### Animation
- **Entrada Suave:** Elementos entram com fade-in + slide suave (de baixo para cima) ao carregar a página.
- **Hover Dinâmico:** Cards elevam-se ligeiramente, botões mudam de cor. Sem efeitos exagerados.
- **Scroll Suave:** Navegação âncora com scroll suave (smooth scroll).

### Typography System
- **Títulos (H1, H2, H3):** Poppins Bold, tamanhos 32px (H1), 24px (H2), 20px (H3). Cor: Azul Profundo.
- **Subtítulos:** Poppins SemiBold, 18px, Cinza Escuro.
- **Corpo de Texto:** Inter Regular, 16px, Cinza Escuro. Line-height: 1.6 para legibilidade.
- **Pequeno (labels, etc):** Inter Regular, 14px, Cinza Médio.

---

## Implementação
Este design será implementado usando Tailwind CSS 4 com cores customizadas em `index.css`, fontes do Google Fonts (Poppins + Inter), e componentes shadcn/ui para consistência.
