# 🚀 GrowTwitter

O **GrowTwitter** é uma aplicação de rede social inspirada no Twitter (X), desenvolvida como projeto Full Stack III com foco em **React, arquitetura de front-end e integração com API REST**.

A aplicação permite interação entre usuários através de tweets, curtidas, respostas e sistema de seguidores.

---

## 🔗 Demonstração

- 🌐 **Deploy:** https://growtwitter-app-ruddy.vercel.app/login  
- 🔑 **Credenciais de teste:**
  - Login: `pedrolandin`
  - Senha: `senha123`

---

## 🧠 Funcionalidades

-  **Autenticação:** Login e logout com persistência de sessão  
-  **Feed:** Exibição de tweets (globais + usuário logado)  
-  **Tweets:** Criação e exclusão de posts  
-  **Likes:** Curtir e descurtir tweets  
-  **Replies:** Respostas encadeadas (comentários)  
-  **Perfis:**
   - Visualização do próprio perfil  
   - Visualização de outros usuários  
-  **Follow / Unfollow:** Sistema de seguidores  
-  **Explorar:** Página com conteúdos estáticos  
-  **Rotas protegidas:** Usuários não autenticados são redirecionados para login  
-  **Responsivo:** Desktop, tablet e mobile  

---

## 🧩 Páginas da Aplicação

- **Login:** autenticação do usuário  
- **Home:** feed principal com interações  
- **Perfil:** dados do usuário e seus tweets  
- **Explorar:** conteúdos estáticos 

---

## 🛠️ Tecnologias

- **React + TypeScript + Vite**
- **Styled Components** 
- **React Router DOM**
- **Context API**
- **Custom Hooks** 
- **Axios**

---

## ▶️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/growtwitter-app.git

# Acesse a pasta do projeto
cd growtwitter-app

# Instale as dependências
npm install

# Rode o projeto
npm run dev