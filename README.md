Notes App

A clean and minimal full-stack notes app built with Next.js (App Router) and TypeScript, styled using Tailwind CSS + ShadCN, and backed by PostgreSQL using Prisma.

This app is built to showcase full-stack skills with smooth UI, solid structure, and modern tooling.


---

🚀 Tech Stack

Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

ShadCN UI


Backend

Prisma – ORM

PostgreSQL



---

✨ Features

Create, read, and delete notes

Fully responsive and accessible UI

Minimal and clean UX with ShadCN

Postgres-backed data with Prisma

Ready for auth integration (WIP)



---

📁 Project Structure

src/
├── app          # Pages, layouts, routing (App Router)
├── components   # Reusable UI components
├── lib          # Helpers and utilities
├── styles       # Global and Tailwind styles

prisma/
└── schema.prisma # PostgreSQL schema

public/           # Static assets


---

⚙️ Getting Started

1. Clone & Install

git clone https://github.com/rajaryandew/notes-app.git
cd notes-app
npm install

2. Setup Environment

Create a .env file:

DATABASE_URL=postgresql://user:password@localhost:5432/notesapp

3. Prisma Setup

npx prisma generate
npx prisma migrate dev --name init

4. Run App

npm run dev

Visit: http://localhost:3000


---

🔗 Live Demo

Check it out here


---

📄 License

MIT

