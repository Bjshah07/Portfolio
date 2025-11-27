<div>
  <br />
    <a href="https://youtu.be/0fYi8SGA20k?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/project_3D_developer_portfolio/assets/151519281/4722160a-8e61-403f-a905-728feae1f7e6" alt="Project Banner">
    </a>
  <br />

  <div align="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A 3D Developer Portfolio</h3>

  ## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)


## <a name="introduction">🤖 Introduction</a>

Welcome to my personal portfolio! This project showcases my skills as a MERN stack developer, blending creativity with technical expertise to build immersive and interactive web experiences. Here, you'll find examples of my work with 3D libraries, engaging animations, and modern web technologies. My goal is to create fast, responsive, and visually captivating applications that highlight my passion for clean engineering and user-focused design.

Feel free to explore my projects, skills, and experience. If you have any questions or would like to connect, reach out via the contact section or email.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- React Three Fiber
- React Three Drei
- Vite
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Customizable 3D Hero Section**: Includes a 3D desktop model easily customizable to suit specific needs.

👉 **Interactive Experience and Work Sections**: Utilizes animations powered by framer motion for engaging user experience.

👉 **3D Skills Section**: Showcases skills using 3D geometries through three.js and React Three fiber

👉 **Animated Projects and Testimonials**: Features animated sections using framer motion for projects and client testimonials.

👉 **Contact Section with 3D Earth Model**:Integrates a 3D earth model with email functionality powered by emailjs.

👉 **3D Stars**: Generate stars progressively at random positions using Three.js for background display.

👉 **Consistent Animations**: Implements cohesive animations throughout the website using framer motion.

👉 **Responsive Design**: Ensures optimal display and functionality across all devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:adrianhajdin/project_3D_developer_portfolio.git
cd project_3D_developer_portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.js</code></summary>

```javascript
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",

    <details>
    <summary><code>src/constants/index.js</code></summary>

    ```javascript
    import {
      backend,
      web,
      javascript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      nodejs,
      mongodb,
      git,
      fire,
      bootstrap,
      powerBI,
      express,
      pentagon,
      codSoft,
      proace,
      travel,
    } from "../assets";

    export const navLinks = [
      { id: "about", title: "About" },
      { id: "work", title: "Work" },
      { id: "project", title: "Project" },
      { id: "contact", title: "Contact" },
    ];

    const services = [
      { title: "Frontend Developer", icon: web },
      { title: "Backend Developer", icon: backend },
    ];

    const technologies = [
      { name: "HTML 5", icon: html },
      // ...other technologies
    ];
    ```
    </details>

    <details>
    <summary><code>src/index.css</code></summary>

    ```css
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      scroll-behavior: smooth;
      color-scheme: dark;
    }

    .hash-span {
      margin-top: -100px;
      padding-bottom: 100px;
      display: block;
    }

    .black-gradient {
      background: #000000;
      background: linear-gradient(to right, #434343, #000000);
    }

    .green-pink-gradient {
      background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
    }
    ```
    </details>

    <details>
    <summary><code>src/utils/motion.js</code></summary>

    ```javascript
    export const textVariant = (delay) => ({
      hidden: { y: -50, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.25, delay },
      },
    });

    export const fadeIn = (direction, type, delay, duration) => ({
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type, delay, duration, ease: "easeOut" },
      },
    });
    ```
    </details>

    <details>
    <summary><code>src/styles.js</code></summary>

    ```javascript
    const styles = {
      paddingX: "sm:px-16 px-6",
      paddingY: "sm:py-16 py-6",
      padding: "sm:px-16 px-6 sm:py-16 py-10",
      heroHeadText:
        "font-black text-white lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[20px] lg:leading-[98px] mt-2",
      heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
      sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
      sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
    };

    export { styles };
    ```
    </details>
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
```
</details>

<details>
<summary><code>styles.js</code></summary>

```javascript
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
```

</details>

<details>
<summary><code>tailwind.config.cjs</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
```

</details>

## 🙏 Thank You!

Thank you for visiting my portfolio! I appreciate your interest in my work and projects. If you have any feedback, questions, or collaboration ideas, feel free to reach out via the contact section or email. Let's connect and build something amazing together!
