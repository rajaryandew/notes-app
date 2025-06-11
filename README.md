<div align="center">

# 📝 Notes App

A beautiful, modern note-taking app built with 🔥 **Next.js 14**, **Prisma**, **Tailwind CSS**, and **TypeScript**.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)

**Live Demo ➜ [notes-app-gold-zeta.vercel.app](https://notes-app-gold-zeta.vercel.app)**

</div>

---

## 📚 Introduction

The **Notes App** is a full-stack, responsive note-taking application built with modern web technologies. It focuses on performance, developer experience, and clean architecture. You can create, read, update, and delete your notes in a minimal interface with full backend integration.

Whether you're a student jotting down ideas or a developer organizing thoughts, this app gives you a clean space to think.

---

## ✨ Key Features

🔹 **Next.js 14 App Router** - Uses the latest server-side capabilities and layout patterns  
🔹 **Prisma ORM** - Type-safe database management with support for PostgreSQL  
🔹 **Tailwind CSS** - Utility-first CSS framework for fast UI development  
🔹 **TypeScript** - Ensures a robust and type-safe codebase  
🔹 **JWT Authentication Ready** - Secure user auth using industry-standard tokens  
🔹 **Recycle Bin** - Soft-delete system to recover accidentally deleted notes  
🔹 **Responsive UI** - Works flawlessly on mobile, tablet, and desktop  
🔹 **Developer Tools** - ESLint + Prettier for clean and consistent code

---

## ⚙️ Tech Stack

| Area            | Tech                             |
|-----------------|----------------------------------|
| Frontend        | Next.js 14, TypeScript           |
| Styling         | Tailwind CSS                     |
| Backend         | Next.js Server actions, Prisma   |
| Database        | PostgreSQL                       |
| Authentication  | JWT (JSON Web Tokens)            |
| Dev Tools       | ESLint, Prettier                 |
| Deployment      | Vercel                           |

---

## 🛠️ Getting Started

### ✅ Prerequisites

- **Node.js** (version 18 or above)
- A **PostgreSQL** database (local or cloud)
- Your choice of **npm**, **yarn**, **pnpm**, or **bun**

### 📦 Installation

```bash
git clone https://github.com/rajaryandew/notes-app.git
cd notes-app

# Install dependencies
npm install   # or yarn / pnpm / bun
```

---

## 🔐 Environment Variables

Set up a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
SALT_ROUNDS=10
JWT_SECRET="your-secret-key"
ENVOIRMENT="prod" || "local"
```

> 💡 Use your PostgreSQL credentials or copy the connection string from services like Supabase, Railway, or Neon.

---

## 🧬 Prisma Setup

Generate the client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

---

## 🔧 Run Dev Server

```bash
npm run dev   # or yarn dev / pnpm dev / bun dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to see it in action 🚀

---

## 📁 Folder Structure

```txt
notes-app/
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── src/
│   ├── app/            # App Router pages, layouts, loading
│   ├── components/     # Reusable React components
│   ├── lib/            # Utility functions (e.g. JWT, bcrypt, DB access)
│   └── styles/         # Global Tailwind and CSS styles
├── .eslintrc.js        # ESLint config
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind theme customization
└── tsconfig.json       # TypeScript settings
```

---

## 🧠 How It Works

- User hits the frontend — a clean UI built with Tailwind + Next.js layouts  
- Next.js App Router handles pages and server-side logic seamlessly  
- Server actions connect to a PostgreSQL database using Prisma  
- Auth is JWT-based: password hashing via bcrypt, token verification in middleware  
- Notes are created, edited, or deleted from the PostgreSQL DB with real-time feedback

---

## 🪪 License

This project is licensed under the **[MIT License](./LICENSE)** — meaning you can use, copy, modify, distribute, or sell it. Just keep the original credits.  

---

## 💬 About Me

> I'm **[Aryan](https://github.com/rajaryandew)** – a 14 y/o dev who loves building full-stack stuff and learning cool tech.  
> If this helped you or inspired you, drop a ⭐, fork it, or just say hi 😄

---
