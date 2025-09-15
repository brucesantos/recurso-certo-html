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
│   ├── input.css            # Arquivo CSS de entrada (Tailwind)
│   └── output.css           # Arquivo CSS compilado
├── package.json             # Dependências do projeto
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

3. **Compile o CSS (se necessário)**
   ```bash
   npx tailwindcss -i src/input.css -o src/output.css --watch
   ```

## 🎨 Desenvolvimento

### Compilação do CSS

O projeto usa Tailwind CSS v4. Para compilar o CSS durante o desenvolvimento:

```bash
# Compilação única
npx tailwindcss -i src/input.css -o src/output.css

# Compilação em modo watch (recompila automaticamente)
npx tailwindcss -i src/input.css -o src/output.css --watch
```

### Estrutura das Páginas

- **`index.html`** - Página de login com formulário de CPF e senha
- **`recursos.html`** - Página principal com:
  - Seleção de concurso, cargo e turno
  - Abas para "Recursos" e "Gabarito"
  - Lista de recursos interpostos
  - Visualização do gabarito das provas

### Componentes Utilizados

O projeto utiliza componentes do **Tailwind Plus Elements**:
- `el-dropdown` - Menu dropdown do perfil
- `el-select` - Seletores customizados
- `el-dialog` - Modais para visualização de detalhes
- `el-disclosure` - Menu mobile

### Customizações CSS

O arquivo `input.css` contém:
- Import do Tailwind CSS
- Classes customizadas para tabs (`.tab-content`, `.tab-content.active`)

## 🚀 Como Executar

1. **Instale as dependências** (se ainda não fez):
   ```bash
   npm install
   ```

2. **Compile o CSS**:
   ```bash
   npx tailwindcss -i src/input.css -o src/output.css
   ```

3. **Abra o arquivo HTML**:
   - Abra `src/index.html` em um navegador web
   - Ou use um servidor local (recomendado):
     ```bash
     # Usando Python
     python -m http.server 8000
     
     # Usando Node.js (http-server)
     npx http-server src -p 8000
     ```

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
3. **Faça suas alterações** e teste localmente
4. **Compile o CSS** se necessário: `npx tailwindcss -i src/input.css -o src/output.css`
5. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
6. **Push** para sua branch: `git push origin feature/nova-funcionalidade`
7. **Abra um Pull Request**

## 📚 Documentação Adicional

- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Tailwind Plus Elements](https://tailwindplus.com/elements)
- [Inter Font](https://rsms.me/inter/)

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Siga o padrão de código existente
2. Teste suas alterações localmente
3. Mantenha o CSS compilado atualizado
4. Documente mudanças significativas

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**FGV Conhecimento** - Sistema de Recursos v1.0.0
