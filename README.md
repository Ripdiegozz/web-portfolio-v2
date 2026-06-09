# Diego's Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ripdiegozz/web-portfolio-v2)

## Welcome to my personal portfolio! This project showcases my skills and projects, built with [Astro](https://astro.build/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/).
![image](https://github.com/user-attachments/assets/7cfd140b-131d-45b5-a129-8852d9a26f8a)

## 🚀 Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ripdiegozz/web-portfolio-v2/
   ```

2. **Copy the example environment file:**

   ```sh
   cp .env.example .env
   ```

3. **Fill in the required environment variables in `.env`:**

   - `ASTRO_DB_REMOTE_URL` — Turso database URL
   - `ASTRO_DB_APP_TOKEN` — Turso app token
   - `PUBLIC_ASTRO_EMAIL_JS_PUBLIC_KEY` — EmailJS public key
   - `PUBLIC_ASTRO_EMAIL_JS_SERVICE_ID` — EmailJS service ID
   - `PUBLIC_ASTRO_EMAIL_JS_TEMPLATE_ID` — EmailJS template ID

4. **Install dependencies:**

   ```sh
   bun install
   ```

5. **Start the development server:**

   ```sh
   bun run dev
   ```

   The site will be available at `http://localhost:4321`.

## 🧾 Available Commands

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `bun install`    | Install all dependencies.              |
| `bun dev`    | Start the local development server.    |
| `bun build`  | Build the site for production.         |
| `bun preview`| Preview the production build locally.  |
| `bun migrate:db` | Run database migrations.               |

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The following environment variables must be configured in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `ASTRO_DB_REMOTE_URL` | Turso database remote URL |
| `ASTRO_DB_APP_TOKEN` | Turso database app token |
| `PUBLIC_ASTRO_EMAIL_JS_PUBLIC_KEY` | EmailJS public key |
| `PUBLIC_ASTRO_EMAIL_JS_SERVICE_ID` | EmailJS service ID |
| `PUBLIC_ASTRO_EMAIL_JS_TEMPLATE_ID` | EmailJS template ID |

## 🌐 Live Demo

[View the live portfolio](https://dagadev.tech)
