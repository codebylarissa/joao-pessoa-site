# Visite João Pessoa 

Um site moderno e responsivo sobre João Pessoa, migrado de HTML estático para uma Single Page Application (SPA) utilizando React, Vite e React Router.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de que tem o **Node.js** instalado na sua máquina.

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta raiz do projeto e instale as dependências executando:
```bash
npm install
```

### Executando o Projeto
Após a instalação das dependências, execute o comando abaixo para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Em seguida, abra o link gerado no terminal (geralmente http://localhost:5173) no seu navegador.

## Estrutura do Projeto
```
joao-pessoa-site/
├── public/             # Recursos estáticos
├── src/                # Código-fonte principal da aplicação
│   ├── assets/         # Imagens do projeto
│   ├── components/     # Componentes reutilizáveis (Header, Footer, Cards, Hero, etc.)
│   ├── pages/          # Páginas completas (Home, Praias, PontosTuristicos)
│   ├── css/            # Estilos globais e específicos do projeto
│   ├── App.jsx         # Componente centralizador e configurador de rotas
│   └── main.jsx        # Ponto de entrada (entry point) da aplicação React
├── .gitignore          # Arquivos e pastas ignorados pelo Git
├── package.json        # Dependências e scripts do projeto
└── README.md           # Documentação do projeto
```