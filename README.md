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

The **Notes App** is a full-stack, modern note-taking application designed with simplicity and utility in mind. Whether you're jotting ideas or managing your day, it gives you a smooth and responsive interface backed by powerful backend tech.

---

## ✨ Key Features

🔹 **Next.js 14 App Router** — Uses the latest layout and server capabilities  
🔹 **Pin Notes** — Keep important notes at the top for quick access  
🔹 **Recycle Bin** — Soft-delete system with 30-day auto-clean via Vercel Cron  
🔹 **Hybrid Auth (JWT + Redis)** — Secure sessions using token-cookie and Redis  
🔹 **Responsive UI** — Works great on all screen sizes  
🔹 **Type-Safe Codebase** — Built with TypeScript and Prisma  
🔹 **Clean Dev Setup** — ESLint + Prettier for consistent code style

---

## ⚙️ Tech Stack

| Area            | Tech                                      |
|-----------------|-------------------------------------------|
| Frontend        | Next.js 14, TypeScript                    |
| Styling         | Tailwind CSS                              |
| Backend         | Next.js Server Actions, Prisma            |
| Database        | PostgreSQL                                |
| Authentication  | JWT + Redis Sessions                      |
| Cron Jobs       | Vercel Scheduled Functions                |
| Dev Tools       | ESLint, Prettier                          |
| Deployment      | Vercel                                    |

---

## 🛠️ Getting Started

### ✅ Prerequisites

- **Node.js** (v18 or above)
- **PostgreSQL** database
- Optional: **Redis** for auth sessions

### 📦 Installation

```bash
git clone https://github.com/rajaryandew/notes-app.git
cd notes-app

# Install dependencies
npm install   # or yarn / pnpm / bun
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
SALT_ROUNDS=10
JWT_SECRET="your-secret-key"
ENVOIRMENT="prod" || "local"

REDIS_URL="your-redis-connection-url"
REDIS_TOKEN="your-redis-access-token"
```

> 💡 `JWT_SECRET` signs a secure cookie with a session ID. The actual session data lives in Redis.

---

## 🧬 Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev
```

---

## 🔧 Run Dev Server

```bash
npm run dev   # or yarn dev / pnpm dev / bun dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to get started 🚀

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

- Frontend is built with the App Router and modern layout patterns  
- Notes are managed using Prisma with PostgreSQL  
- Pinned notes stay at the top  
- Deleted notes go into a recycle bin, auto-cleared after 30 days  
- Auth uses a signed JWT cookie storing a `sessionID` linked to Redis session data  
- Dev workflow is optimized with linting, formatting, and clean structure

---

## 🪪 License

MIT License — feel free to use, fork, or remix. Just keep the credits intact.  
[View License →](./LICENSE)

---

## 💬 About Me

> I'm **[Aryan](https://github.com/rajaryandew)** — a 14 y/o full-stack dev who loves building cool stuff and shipping features daily 🚀  
> If you dig this project, leave a ⭐ or fork it. Would mean a lot ✌️

---

