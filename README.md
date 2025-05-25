# 📝 Notes App

A sleek and modern note-taking app built with **Next.js 14**, **Tailwind CSS**, **Prisma**, and **TypeScript**. Designed for simplicity and efficiency, this app lets you jot down your thoughts and keep them organized effortlessly.

🔗 **Live Demo**: [`https://notes-app-gold-zeta.vercel.app`](https://notes-app-gold-zeta.vercel.app)

---

## 🚀 Features

- ⚡ **Next.js 14** – App Router, server components, latest features  
- 🎨 **Tailwind CSS** – Fast and responsive UI styling  
- 🛡️ **TypeScript** – Type-safe and scalable  
- 🧠 **Prisma** – Powerful and intuitive ORM  
- 🧹 **ESLint + Prettier** – Clean code, always  
- 📱 **Responsive UI** – Works well across all screen sizes  

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `v18` or higher  
- Any package manager (`npm`, `yarn`, `pnpm`, or `bun`)

### Installation

```bash
git clone https://github.com/rajaryandew/notes-app.git
cd notes-app
```

Install dependencies:

```bash
# Choose one
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

### 🔐 Environment Variables

Create a `.env` file in the root of your project with the following content:

```env
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
SALT_ROUNDS=10
JWT_SECRET="your-secret-key"
ENVOIRMENT="prod" || "local"
```

> 🧠 Replace the placeholder values with your actual PostgreSQL credentials.  
> For hosted DBs like **Supabase**, **Railway**, or **Neon**, just paste their connection string into `DATABASE_URL`.

---

### 🧬 Database Setup

Run the following Prisma commands:

```bash
npx prisma generate
npx prisma migrate dev
```

---

### 🧪 Start Dev Server

```bash
# Again, choose one
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```txt
notes-app/
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router structure
│   ├── components/     # UI components
│   ├── lib/            # Helpers and utilities
│   └── styles/         # Global styling
├── .eslintrc.js        # ESLint config
├── next.config.js      # Next.js config
├── tailwind.config.ts  # Tailwind config
└── tsconfig.json       # TypeScript config
```