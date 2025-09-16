# Sistema de Interposição de Recursos - FGV Conhecimento

Sistema web para interposição de recursos em concursos públicos, desenvolvido com HTML, CSS e JavaScript, utilizando Tailwind CSS v4 e Tailwind Plus Elements.

## 📋 Sobre o Projeto

Este é um sistema de recursos para concursos públicos que permite aos candidatos:
- Fazer login no sistema
- Visualizar gabaritos das provas
- Interpor recursos contra questões específicas
- Acompanhar o status dos recursos enviados

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura das páginas
- **Tailwind CSS v4** - Framework CSS para estilização
- **Tailwind Plus Elements** - Componentes adicionais (dropdowns, modais, etc.)
- **JavaScript Vanilla** - Interatividade e funcionalidades
- **Inter Font** - Tipografia

## 📁 Estrutura do Projeto

```
recurso-certo-html/
├── src/
│   ├── img/
│   │   ├── logo.svg          # Logo principal
│   │   └── logo-icon.svg     # Ícone do logo
│   ├── index.html            # Página de login
│   ├── recursos.html         # Página principal do sistema
│   ├── main.js              # Script principal com Tailwind Plus Elements
│   ├── input.css            # Arquivo CSS de entrada (Tailwind)
│   └── output.css           # Arquivo CSS compilado
├── package.json             # Dependências e scripts do projeto
├── package-lock.json        # Lock das dependências
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (geralmente vem com o Node.js)

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd recurso-certo-html
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

   Isso irá:
   - Iniciar o Vite na porta 3000
   - Servir os módulos ES6 corretamente
   - Compilar o CSS do Tailwind automaticamente
   - Ficar observando mudanças com Hot Module Replacement

## 🎨 Desenvolvimento

### Scripts Disponíveis

O projeto inclui scripts npm para facilitar o desenvolvimento:

```bash
# Desenvolvimento com Vite (recomendado)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Compilação manual do CSS (se necessário)
npm run build:css
```

### Sistema de Build

O projeto utiliza:
- **Vite** como bundler e servidor de desenvolvimento
- **Tailwind CSS v4** para estilização
- **Tailwind Plus Elements** para componentes interativos (via npm)
- **ES Modules** para importação de dependências
- **Hot Module Replacement (HMR)** para desenvolvimento rápido

### Estrutura das Páginas

- **`index.html`** - Página de login com formulário de CPF e senha
- **`recursos.html`** - Página principal com:
  - Seleção de concurso, cargo e turno
  - Abas para "Recursos" e "Gabarito"
  - Lista de recursos interpostos
  - Visualização do gabarito das provas

### Componentes Utilizados

O projeto utiliza componentes do **Tailwind Plus Elements**:
- **Disclosure** - Componentes de accordion/expansão
- **Dropdown Menu** - Menus dropdown interativos
- **Dialog** - Modais para visualização de detalhes
- **Select** - Seletores customizados
- **Tabs** - Sistema de abas
- **Popover** - Elementos flutuantes
- **Command Palette** - Busca avançada
- **Autocomplete** - Campos de autocompletar

### Customizações CSS

O arquivo `input.css` contém:
- Import do Tailwind CSS
- Classes customizadas para tabs (`.tab-content`, `.tab-content.active`)

## 🚀 Como Executar

### Desenvolvimento (Recomendado)

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acesse no navegador**:
   - Abra `http://localhost:3000` no seu navegador
   - O servidor irá recompilar o CSS automaticamente quando você fizer alterações

### Produção

1. **Compile o CSS para produção**:
   ```bash
   npm run build
   ```

2. **Sirva os arquivos do build (sem SPA)**:
   ```bash
   # Dentro da pasta do projeto
   npx serve dist -l 8080
   # abra http://localhost:8080/index.html
   ```

   Observações:
   - Use sem a flag `-s` (SPA mode). Com `-s`, requisições como `POST /recursos.html` podem ser reescritas para `index.html`, aparentando “voltar” para o login.
   - Se acessar `http://localhost:8080/` retornar 404, abra explicitamente `http://localhost:8080/index.html`.
   - O 404 de `favicon.ico` é esperado se não houver favicon.

### Execução Manual (Alternativa)

Se preferir não usar o servidor de desenvolvimento:

1. **Compile o CSS**:
   ```bash
   npm run build:css
   ```

2. **Use um servidor local**:
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js (http-server)
   npx http-server src -p 8000
   ```

   **⚠️ Importante**: Os módulos ES6 do Tailwind Plus Elements precisam ser servidos via HTTP, não funcionam abrindo o arquivo diretamente no navegador.

## 📝 Funcionalidades

### Página de Login (`index.html`)
- Formulário de login com CPF e senha
- Checkbox "Lembrar de mim"
- Validação de campos obrigatórios
- Redirecionamento para `recursos.html`

### Página Principal (`recursos.html`)
- **Seleção de Dados**: Concurso, cargo e turno
- **Informações do Candidato**: Número de inscrição e tipo de prova
- **Aba Recursos**: Lista de recursos interpostos com status
- **Aba Gabarito**: Visualização do gabarito por versão da prova
- **Modais**: Detalhes dos recursos e questões

## 🎯 Próximos Passos

Para contribuir com o projeto:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
3. **Instale as dependências**: `npm install`
4. **Inicie o servidor de desenvolvimento**: `npm run dev`
5. **Faça suas alterações** e teste localmente em `http://localhost:3000`
6. **Compile o CSS** se necessário: `npm run build`
7. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
8. **Push** para sua branch: `git push origin feature/nova-funcionalidade`
9. **Abra um Pull Request**

## 📚 Documentação Adicional

- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Tailwind Plus Elements](https://tailwindcss.com/plus/ui-blocks/documentation/elements)
- [Inter Font](https://rsms.me/inter/)

## 🔧 Troubleshooting

### Problemas Comuns

**Erro: "Failed to resolve module specifier"**
- **Causa**: Tentativa de abrir o arquivo HTML diretamente no navegador
- **Solução**: Use sempre um servidor local (`npm run dev` ou `npm run serve`)

**Componentes não funcionam**
- **Causa**: Tailwind Plus Elements não carregou
- **Solução**: Verifique o console do navegador e certifique-se de que está usando um servidor local

**CSS não atualiza**
- **Causa**: Watch do Tailwind não está ativo
- **Solução**: Use `npm run dev` para desenvolvimento ou `npm run build:css` para compilação manual

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Siga o padrão de código existente
2. Use `npm run dev` para desenvolvimento
3. Teste suas alterações em `http://localhost:3000`
4. Mantenha o CSS compilado atualizado com `npm run build`
5. Documente mudanças significativas
6. Verifique se os componentes Tailwind Plus Elements funcionam corretamente

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**FGV Conhecimento** - Sistema de Recursos v1.0.0
