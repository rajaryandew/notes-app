# ðŸ“ Notes App

A clean and minimal full-stack notes app built with **Next.js (App Router)** and **TypeScript**, styled using **Tailwind CSS** + **ShadCN**, and backed by **PostgreSQL** using **Prisma**.

This app is built to showcase full-stack skills with smooth UI, solid structure, and modern tooling.

---

## âš™ï¸ Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)

**Backend**
- [Prisma](https://www.prisma.io/) â€“ ORM
- [PostgreSQL](https://www.postgresql.org/)

---

## âœ¨ Features

- Create, read, and delete notes
- Fully responsive and accessible UI
- Minimal and clean UX with ShadCN
- Postgres-backed data with Prisma
- Ready for auth integration (WIP)

---

## ðŸ—‚ï¸ Project Structure

```
src/
â”œâ”€â”€ app          # Pages, layouts, routing (App Router)
â”œâ”€â”€ components   # Reusable UI components
â”œâ”€â”€ lib          # Helpers and utilities
â”œâ”€â”€ styles       # Global and Tailwind styles

prisma/
â””â”€â”€ schema.prisma # PostgreSQL schema

public/           # Static assets
```

---

## ðŸš€ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/rajaryandew/notes-app.git
cd notes-app
npm install
```

### 2. Setup Environment

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/notesapp
```

### 3. Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run App

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ðŸ§ª Live Demo

**[Check it out here](https://notes-app-gold-zeta.vercel.app/)**

---

## ðŸ“„ License

[MIT](LICENSE)