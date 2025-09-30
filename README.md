# 3D Portfolio

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/ladunjexa/reactjs18-3d-portfolio?label=Latest%20release&style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/stargazers)
[![Fork](https://img.shields.io/github/forks/ladunjexa/reactjs18-3d-portfolio?style=social)](https://github.com/ladunjexa/reactjs18-3d-portfolio/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/ladunjexa/reactjs18-3d-portfolio?style=social&logo=github)](https://github.com/ladunjexa/reactjs18-3d-portfolio/pulls)

![demo](.github/README_ASSETS/3d-portfolio.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/luadnjexa)
[![License](https://img.shields.io/github/license/ladunjexa/reactjs18-3d-portfolio?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/ladunjexa/reactjs18-3d-portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![Contributors](https://img.shields.io/github/contributors/ladunjexa/reactjs18-3d-portfolio?style=flat&color=orange&label=Contributors)](https://github.com/ladunjexa/reactjs18-3d-portfolio/graphs/contributors)
![Release](https://img.shields.io/github/release/ladunjexa/reactjs18-3d-portfolio.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/ladunjexa/reactjs18-3d-portfolio/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio/badge.svg)](https://snyk.io/test/github/ladunjexa/reactjs18-3d-portfolio)

## 🌐 Live Demo

Explore the live demonstration of the project:
[reactjs18-3d-portfolio](https://reactjs18-3-d-portfolio.vercel.app/)

## 📝 Description

**3D Portfolio** is a well-designed and fully functional portfolio website that is built with
React.js and Three.js. It is a fully responsive website that works well on all devices.

<details><summary><b>Folder Structure</b></summary>

```bash
reactjs18-3d-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   ├── Works.tsx
├   ├   ├   └── page.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       ├── company/
├       ├   └── [[...]].{svg,png}
├       ├── tech/
├       ├   └── [[...]].{svg,png}
├       ├── [[...]].{svg,png}
├       └── index.ts
├── public/
├   ├── desktop_pc
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── planet
├   ├   ├── textures/[[...]].png
├   ├   ├── license.txt
├   ├   ├── scene.bin
├   ├   └── scene.gltf
├   ├── logo.png
├   └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses EmailJS in order to send emails using client-side, therefore,
you need to create EmailJS account [here](https://emailjs.com/) and sets the
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAIL_JS_ACCESS_TOKEN` environment
variables in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:5137` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Boot up a local static web server           |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Perform type-checking                       |

## 🔒 Environment Variables

Environment variables[^3] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**React.js 18 3D Portfolio** uses [EmailJS](https://www.emailjs.com/) as external service. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
VITE_EMAILJS_SERVICE_ID=<VITE_EMAILJS_SERVICE_ID>
VITE_EMAILJS_TEMPLATE_ID=<VITE_EMAILJS_TEMPLATE_ID>
VITE_EMAIL_JS_ACCESS_TOKEN=<VITE_EMAIL_JS_ACCESS_TOKEN>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔧 Contributing

[![contributors](https://contrib.rocks/image?repo=ladunjexa/reactjs18-3d-portfolio)](https://github.com/ladunjexa/reactjs18-3d-portfolio/graphs/contributors)

Contributions are what make the open source community such an amazing place to learn, inspire, and
create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉

### 📩 Bug / Feature Request

If you find a bug (failure of a module to execute its intended function), kindly open an issue
[here](https://github.com/ladunjexa/reactjs18-3d-portfolio/issues/new) by including the issue with a
title and clear description.

If you'd like to request a new function, feel free to do so by opening an issue
[here](https://github.com/ladunjexa/reactjs18-3d-portfolio/issues/new). Please include sample
queries and their corresponding results.

## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [Maath](https://www.npmjs.com/package/maath)
- [EmailJS](https://www.emailjs.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816)

<!-- [![Twitter](https://img.shields.io/twitter/follow/ladunjexa.svg?style=social)](https://twitter.com/intent/follow?screen_name=ladunjexa) -->

## 📋 License

**Three.js 3D Portfolio** is open source software
[licensed as MIT](https://opensource.org/license/mit/) and is free to use — See
[LICENSE](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE) for more details.
#   m y p o r t f o l i o 
 
 #   m y p o r t f o l i o 
 
 






































Portfolio+vite/
├─ dist/
│  ├─ assets/
│  │  ├─ adz-BzELEZRy.png
│  │  ├─ AR-DySLH7Kk.png
│  │  ├─ backend-B4luK_fR.png
│  │  ├─ boots-tLqkWsOf.png
│  │  ├─ carrent-BasnKSmV.png
│  │  ├─ cas-DC_IUBTL.png
│  │  ├─ cb-Cam9xX5E.png
│  │  ├─ creator-DPpJU1Gk.png
│  │  ├─ css-CAsor-HB.png
│  │  ├─ cyb-BG9XbOKZ.png
│  │  ├─ docker-DrQKSZ7f.png
│  │  ├─ figma-DdeqztSZ.png
│  │  ├─ firebase-g5GqUzEi.png
│  │  ├─ flex-uc32kqqQ.png
│  │  ├─ github-BJlaEnou.png
│  │  ├─ GS-CzOC_yja.png
│  │  ├─ herobg-B_F_beXt.png
│  │  ├─ html-_9c5Ggq_.png
│  │  ├─ hukul-YlZMnJev.png
│  │  ├─ index-BbJ5EIpO.css
│  │  ├─ index-BBz8ynNK.js
│  │  ├─ it-m_F1AUE_.png
│  │  ├─ jobit-Dj0Z5ZAx.png
│  │  ├─ Koponx-BWOOvoXT.jpg
│  │  ├─ love-Dk8ABe7i.png
│  │  ├─ mat-CVWNoLKG.png
│  │  ├─ meta-Cy_q3vS6.png
│  │  ├─ mobile-CewLEo0n.png
│  │  ├─ mongodb-DnU9EL9s.png
│  │  ├─ nextjs-BIvEC02d.png
│  │  ├─ nodejs-Bw5ER_SM.png
│  │  ├─ pack-CgM3r47p.png
│  │  ├─ parag-BgWAEVcY.png
│  │  ├─ pdfweb-DEdrbfVb.png
│  │  ├─ profile-BornHA3r.png
│  │  ├─ redux-CZb_OTmG.png
│  │  ├─ sch-DUg5oiyt.png
│  │  ├─ shad-C4V_tW9r.png
│  │  ├─ shopify-C3MSEADM.png
│  │  ├─ sql-Y8BqaCCX.png
│  │  ├─ starbucks-DpiFR2bK.png
│  │  ├─ tail-CLR6e3yI.png
│  │  ├─ traf-DCbQwaBf.png
│  │  ├─ tripguide-DqGREipU.png
│  │  ├─ v3-DmRlxnhe.png
│  │  ├─ vs-B9C3bmDg.png
│  │  ├─ vue-DtztZdcY.png
│  │  └─ web-t65li9Rw.png
│  ├─ desktop_pc/
│  │  ├─ textures/
│  │  │  ├─ Material_baseColor.jpeg
│  │  │  ├─ Material_metallicRoughness.png
│  │  │  ├─ Material.002_baseColor.png
│  │  │  ├─ Material.023_baseColor.jpeg
│  │  │  ├─ Material.024_baseColor.jpeg
│  │  │  ├─ Material.074_0_baseColor.png
│  │  │  ├─ Material.074_1_baseColor.jpeg
│  │  │  ├─ Material.074_10_baseColor.jpeg
│  │  │  ├─ Material.074_11_baseColor.png
│  │  │  ├─ Material.074_12_baseColor.jpeg
│  │  │  ├─ Material.074_13_baseColor.png
│  │  │  ├─ Material.074_14_baseColor.png
│  │  │  ├─ Material.074_15_baseColor.png
│  │  │  ├─ Material.074_16_baseColor.png
│  │  │  ├─ Material.074_17_baseColor.png
│  │  │  ├─ Material.074_18_baseColor.png
│  │  │  ├─ Material.074_18_emissive.png
│  │  │  ├─ Material.074_19_baseColor.png
│  │  │  ├─ Material.074_2_baseColor.jpeg
│  │  │  ├─ Material.074_20_baseColor.png
│  │  │  ├─ Material.074_21_baseColor.png
│  │  │  ├─ Material.074_22_baseColor.png
│  │  │  ├─ Material.074_23_baseColor.png
│  │  │  ├─ Material.074_24_baseColor.png
│  │  │  ├─ Material.074_24_emissive.png
│  │  │  ├─ Material.074_25_baseColor.jpeg
│  │  │  ├─ Material.074_26_baseColor.png
│  │  │  ├─ Material.074_27_baseColor.png
│  │  │  ├─ Material.074_27_emissive.png
│  │  │  ├─ Material.074_28_baseColor.png
│  │  │  ├─ Material.074_29_baseColor.png
│  │  │  ├─ Material.074_3_baseColor.png
│  │  │  ├─ Material.074_30_baseColor.png
│  │  │  ├─ Material.074_31_baseColor.png
│  │  │  ├─ Material.074_32_baseColor.jpeg
│  │  │  ├─ Material.074_33_baseColor.png
│  │  │  ├─ Material.074_34_baseColor.jpeg
│  │  │  ├─ Material.074_35_baseColor.png
│  │  │  ├─ Material.074_36_baseColor.jpeg
│  │  │  ├─ Material.074_39_baseColor.jpeg
│  │  │  ├─ Material.074_4_baseColor.png
│  │  │  ├─ Material.074_4_emissive.png
│  │  │  ├─ Material.074_40_baseColor.png
│  │  │  ├─ Material.074_5_baseColor.png
│  │  │  ├─ Material.074_6_baseColor.png
│  │  │  ├─ Material.074_7_baseColor.png
│  │  │  ├─ Material.074_8_baseColor.png
│  │  │  ├─ Material.074_9_baseColor.png
│  │  │  ├─ Material.074_9_emissive.png
│  │  │  ├─ Material.074_baseColor.png
│  │  │  └─ Tasten_2_baseColor.jpeg
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  └─ scene.gltf
│  ├─ planet/
│  │  ├─ textures/
│  │  │  ├─ Clouds_baseColor.png
│  │  │  └─ Planet_baseColor.png
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  └─ scene.gltf
│  ├─ Abdul_Rafay_Resume.pdf
│  ├─ index.html
│  ├─ logo.png
│  └─ logo.svg
├─ public/
│  ├─ desktop_pc/
│  │  ├─ textures/
│  │  │  ├─ Material_baseColor.jpeg
│  │  │  ├─ Material_metallicRoughness.png
│  │  │  ├─ Material.002_baseColor.png
│  │  │  ├─ Material.023_baseColor.jpeg
│  │  │  ├─ Material.024_baseColor.jpeg
│  │  │  ├─ Material.074_0_baseColor.png
│  │  │  ├─ Material.074_1_baseColor.jpeg
│  │  │  ├─ Material.074_10_baseColor.jpeg
│  │  │  ├─ Material.074_11_baseColor.png
│  │  │  ├─ Material.074_12_baseColor.jpeg
│  │  │  ├─ Material.074_13_baseColor.png
│  │  │  ├─ Material.074_14_baseColor.png
│  │  │  ├─ Material.074_15_baseColor.png
│  │  │  ├─ Material.074_16_baseColor.png
│  │  │  ├─ Material.074_17_baseColor.png
│  │  │  ├─ Material.074_18_baseColor.png
│  │  │  ├─ Material.074_18_emissive.png
│  │  │  ├─ Material.074_19_baseColor.png
│  │  │  ├─ Material.074_2_baseColor.jpeg
│  │  │  ├─ Material.074_20_baseColor.png
│  │  │  ├─ Material.074_21_baseColor.png
│  │  │  ├─ Material.074_22_baseColor.png
│  │  │  ├─ Material.074_23_baseColor.png
│  │  │  ├─ Material.074_24_baseColor.png
│  │  │  ├─ Material.074_24_emissive.png
│  │  │  ├─ Material.074_25_baseColor.jpeg
│  │  │  ├─ Material.074_26_baseColor.png
│  │  │  ├─ Material.074_27_baseColor.png
│  │  │  ├─ Material.074_27_emissive.png
│  │  │  ├─ Material.074_28_baseColor.png
│  │  │  ├─ Material.074_29_baseColor.png
│  │  │  ├─ Material.074_3_baseColor.png
│  │  │  ├─ Material.074_30_baseColor.png
│  │  │  ├─ Material.074_31_baseColor.png
│  │  │  ├─ Material.074_32_baseColor.jpeg
│  │  │  ├─ Material.074_33_baseColor.png
│  │  │  ├─ Material.074_34_baseColor.jpeg
│  │  │  ├─ Material.074_35_baseColor.png
│  │  │  ├─ Material.074_36_baseColor.jpeg
│  │  │  ├─ Material.074_39_baseColor.jpeg
│  │  │  ├─ Material.074_4_baseColor.png
│  │  │  ├─ Material.074_4_emissive.png
│  │  │  ├─ Material.074_40_baseColor.png
│  │  │  ├─ Material.074_5_baseColor.png
│  │  │  ├─ Material.074_6_baseColor.png
│  │  │  ├─ Material.074_7_baseColor.png
│  │  │  ├─ Material.074_8_baseColor.png
│  │  │  ├─ Material.074_9_baseColor.png
│  │  │  ├─ Material.074_9_emissive.png
│  │  │  ├─ Material.074_baseColor.png
│  │  │  └─ Tasten_2_baseColor.jpeg
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  └─ scene.gltf
│  ├─ planet/
│  │  ├─ textures/
│  │  │  ├─ Clouds_baseColor.png
│  │  │  └─ Planet_baseColor.png
│  │  ├─ license.txt
│  │  ├─ scene.bin
│  │  └─ scene.gltf
│  ├─ Abdul_Rafay_Resume.pdf
│  ├─ logo.png
│  └─ logo.svg
├─ src/
│  ├─ assets/
│  │  ├─ company/
│  │  │  ├─ adz.png
│  │  │  ├─ cb.png
│  │  │  ├─ cyb.png
│  │  │  ├─ it.png
│  │  │  ├─ meta.png
│  │  │  ├─ meta1.png
│  │  │  ├─ shopify.png
│  │  │  ├─ shopify1.png
│  │  │  ├─ softnixt.png
│  │  │  ├─ starbucks.png
│  │  │  ├─ tesla1.png
│  │  │  ├─ v3.png
│  │  │  └─ v31.png
│  │  ├─ tech/
│  │  │  ├─ boots.png
│  │  │  ├─ css.png
│  │  │  ├─ docker.png
│  │  │  ├─ figma.png
│  │  │  ├─ firebase.png
│  │  │  ├─ git.png
│  │  │  ├─ html.png
│  │  │  ├─ java.png
│  │  │  ├─ love.png
│  │  │  ├─ mat.png
│  │  │  ├─ mongodb.png
│  │  │  ├─ next.png
│  │  │  ├─ nextjs.png
│  │  │  ├─ nodejs.png
│  │  │  ├─ reactjs.png
│  │  │  ├─ redux.png
│  │  │  ├─ shad.png
│  │  │  ├─ sql.png
│  │  │  ├─ tail.png
│  │  │  ├─ typescript.png
│  │  │  └─ vs.png
│  │  ├─ 3.png
│  │  ├─ AR.png
│  │  ├─ backend.png
│  │  ├─ carrent.png
│  │  ├─ cas.png
│  │  ├─ close.svg
│  │  ├─ creator.png
│  │  ├─ flex.png
│  │  ├─ github.png
│  │  ├─ GS.png
│  │  ├─ herobg.png
│  │  ├─ hukul.png
│  │  ├─ index.ts
│  │  ├─ jobit.png
│  │  ├─ Koponx.jpg
│  │  ├─ logo.png
│  │  ├─ logo.svg
│  │  ├─ menu.svg
│  │  ├─ mobile.png
│  │  ├─ pack.png
│  │  ├─ parag.png
│  │  ├─ pdfweb.png
│  │  ├─ profile.png
│  │  ├─ profile1.png
│  │  ├─ profile2.png
│  │  ├─ sch.png
│  │  ├─ Screenshot 2025-03-21 120620.png
│  │  ├─ traf.png
│  │  ├─ tripguide.png
│  │  ├─ tripguide1.png
│  │  ├─ vue.png
│  │  ├─ web.png
│  │  └─ web1.png
│  ├─ components/
│  │  ├─ atoms/
│  │  │  └─ Header.tsx
│  │  ├─ canvas/
│  │  │  ├─ Ball.tsx
│  │  │  ├─ Computers.tsx
│  │  │  ├─ Earth.tsx
│  │  │  ├─ index.ts
│  │  │  └─ Stars.tsx
│  │  ├─ layout/
│  │  │  ├─ Loader.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ sections/
│  │  │  ├─ About.tsx
│  │  │  ├─ Contact.tsx
│  │  │  ├─ Experience.tsx
│  │  │  ├─ Feedbacks.tsx
│  │  │  ├─ Hero.tsx
│  │  │  ├─ Tech.tsx
│  │  │  └─ Works.tsx
│  │  └─ index.ts
│  ├─ constants/
│  │  ├─ config.ts
│  │  ├─ index.ts
│  │  └─ styles.ts
│  ├─ hoc/
│  │  ├─ index.ts
│  │  └─ SectionWrapper.tsx
│  ├─ types/
│  │  └─ index.d.ts
│  ├─ utils/
│  │  └─ motion.ts
│  ├─ App.tsx
│  ├─ globals.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .env
├─ .eslintignore
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.cjs
├─ index.html
├─ LICENSE
├─ package.json
├─ postcss.config.cjs
├─ README.md
├─ tailwind.config.cjs
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.js
