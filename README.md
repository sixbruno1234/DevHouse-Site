# DevHouse - Site Portfólio

Site portfólio profissional da DevHouse, servidor Discord especializado em desenvolvimento de bots, sites, sistemas e muito mais.

## Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Deploy**: Vercel

## Características

- Design moderno e futurista com tema azul escuro
- 100% responsivo para todos os dispositivos
- Animações suaves e interativas com Framer Motion
- Integração com Discord via webhook para formulário de contato
- Otimizado para performance e SEO
- TypeScript para segurança de tipos

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/devhouse-site.git

# Entre no diretório
cd devhouse-site

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/YOUR_INVITE_CODE
```

### Como obter o Discord Webhook URL:

1. Acesse as configurações do seu servidor Discord
2. Vá em Integrações > Webhooks
3. Crie um novo webhook
4. Copie a URL do webhook
5. Cole no arquivo `.env.local`

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## Deploy na Vercel

### Opção 1: Deploy Automático via GitHub

1. Faça push do seu código para o GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "New Project"
4. Importe seu repositório do GitHub
5. Configure as variáveis de ambiente:
   - `DISCORD_WEBHOOK_URL`
   - `NEXT_PUBLIC_DISCORD_INVITE`
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Execute o deploy
vercel
```

## Estrutura do Projeto

```
src/
├── app/              # Páginas e rotas (App Router)
│   ├── layout.tsx   # Layout principal + SEO
│   ├── page.tsx     # Homepage
│   ├── globals.css  # Estilos globais
│   └── api/
│       └── contact/ # API route do webhook
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Seções da página
│   ├── ui/          # Componentes UI reutilizáveis
│   └── animations/  # Wrappers de animação
├── lib/             # Utilitários e helpers
├── types/           # Definições TypeScript
└── data/            # Dados estáticos
```

## Seções do Site

1. **Hero**: Apresentação principal com CTAs
2. **Sobre Nós**: Informações sobre a DevHouse
3. **Serviços**: 5 categorias principais de serviços
4. **Portfólio**: Projetos realizados
5. **Depoimentos**: Feedback de clientes
6. **Contato**: Formulário integrado com Discord

## Personalização

### Cores

Edite `tailwind.config.ts` para ajustar a paleta:

```typescript
colors: {
  primary: { ... },
  dark: { ... },
  accent: { ... },
}
```

### Conteúdo

Edite os arquivos em `src/data/`:
- `services.ts` - Serviços oferecidos
- `projects.ts` - Projetos do portfólio
- `testimonials.ts` - Depoimentos

### Fontes

As fontes são carregadas via Google Fonts em `layout.tsx`:
- **Heading**: Orbitron (futurista)
- **Body**: Inter (moderna)

## Suporte

- Discord: [DevHouse Server](https://discord.gg/devhouse)
- Issues: [GitHub Issues](https://github.com/devhouse/site/issues)

## Licença

Este projeto é privado e pertence à DevHouse.

---

Desenvolvido com ❤️ por DevHouse
