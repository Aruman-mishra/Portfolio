# Aruman Mishra — Portfolio

My personal developer portfolio built with [Next.js](https://nextjs.org/).

## 🖥️ Technologies Used

- [Next.js](https://nextjs.org/) — React framework for production-grade web apps
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) — Typed JavaScript
- [Framer Motion](https://www.framer.com/motion/) — Animation library for React
- [Nodemailer](https://nodemailer.com/) — Email integration for Node.js

## 🛑 Important Notes

1. **Do not push your Nodemailer password to GitHub.** Use a `.env` file.
2. Use [Next.js API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for Nodemailer so credentials stay server-side.
3. Update the Google site verification code in `/src/data/siteMetaData.mjs`. Create one at <https://search.google.com/search-console/welcome>.

## 🌟 Customizable Theme

Premade themes are available in `theme-examples.css`. Copy the styles into `globals.css` or create your own by editing the CSS variables.

> **Note:** CSS variables only accept HSL values separated by spaces.

## ✉️ Nodemailer Setup

1. Go to your Google Account → **Security** → **2-Step Verification** → **App passwords**.
2. Create an app password and use it as `NODEMAILER_PASS` in your `.env` file.

## ✨ SEO

- Sitemap and robots.txt are auto-generated from the project structure after build.
- Dynamic routes (e.g., `[id]`) are excluded from sitemap.xml.

## 🛠️ Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.
