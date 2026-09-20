# 🚀 Professional Portfolio — Next.js

JS/React se bana hua ek complete professional developer portfolio. Dark/Light mode, About, Skills, Projects, Experience, Contact form aur Vercel Analytics sab included hai.

## 📁 Structure

```
portfolio/
├── app/
│   ├── layout.js       -> Root layout + metadata + Analytics
│   ├── page.js          -> Home page (sab sections yahan jud'te hain)
│   └── globals.css      -> Global styles + Tailwind
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── ThemeToggle.js   -> Dark/Light switch button
│   └── ThemeProvider.js
├── data/
│   └── siteConfig.js    -> 🔧 SARI INFO YAHAN EDIT KARO (name, skills, projects, links)
└── public/
    ├── profile.jpg       -> apni photo yahan replace karo
    ├── resume.pdf         -> apna resume yahan replace karo
    └── projects/          -> project screenshots yahan dalo
```

## ✏️ Apni info kaise dalein (SABSE ZAROORI STEP)

1. `data/siteConfig.js` file kholo — is mein apna **naam, role, about, email, phone, skills, projects, experience, social links** sab edit karo.
2. `public/profile.jpg` ko apni professional photo se replace karo (same naam rakhna).
3. `public/resume.pdf` ko apne asli resume se replace karo.
4. `public/projects/project1.jpg`, `project2.jpg` etc. ko apne project screenshots se replace karo.

Bas itna karne se pura portfolio automatically update ho jayega — kahi bhi manually text dhoondh kar change karne ki zaroorat nahi.

## 🛠️ Run karne ka tarika (apne computer par)

Node.js (v18+) install hona chahiye. Phir terminal mein:

```bash
cd portfolio
npm install
npm run dev
```

Browser mein kholo: **http://localhost:3000**

## 🌙 Dark / Light Mode

Navbar mein sun/moon icon par click karo — theme automatically switch ho jayegi aur save bhi rahegi (`next-themes` use kiya hai).

## 📊 Analytics

`@vercel/analytics` already `app/layout.js` mein add hai. Jab aap ye project **Vercel** par deploy karoge, analytics dashboard automatically start ho jayega (Vercel dashboard > Analytics tab).

## ☁️ Deploy kaise karein (FREE — Vercel)

1. Is project ko GitHub par push karo.
2. [vercel.com](https://vercel.com) par jaake GitHub se login karo.
3. "New Project" > apna repo select karo > Deploy.
4. 2 minute mein live link mil jayegi (e.g. `yourname.vercel.app`).

## 🎨 Customize karna

- **Colors**: `tailwind.config.js` mein `primary` color palette change karo.
- **Sections order**: `app/page.js` mein components ka order badlo.
- **Fonts**: `app/layout.js` mein Google Font link change karo.

## 📦 Included Packages

- **Next.js 14** (App Router)
- **Tailwind CSS** — styling
- **next-themes** — dark/light mode
- **react-icons** — icons
- **@vercel/analytics** — visitor analytics

---

Made with ❤️ using Next.js — ab is folder ko apni info se update karo aur deploy kar do!
