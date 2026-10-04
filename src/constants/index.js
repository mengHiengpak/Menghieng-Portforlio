import reactLogo from "../assets/logo/react.png";
import mongodbLogo from "../assets/logo/mongodb-removebg-preview.png";
import nodeLogo from "../assets/logo/node-removebg-preview.png";
import tailwindLogo from "../assets/logo/tailwind-css-logo-png_seeklogo-354675-removebg-preview.png";
import postgresqlLogo from "../assets/logo/postgresql-removebg-preview.png";
import renderLogo from "../assets/logo/render-removebg-preview.png";
import apiLogo from "../assets/logo/api-settings-removebg-preview.png";
import frameLogo from "../assets/logo/frame.png";
import gsapLogo from "../assets/logo/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png";
import htmlLogo from "../assets/logo/html-removebg-preview.png";
import cssLogo from "../assets/logo/css.png";
import jsLogo from "../assets/logo/JavaScript-Logo.png";
import nextLogo from "../assets/logo/next-js.png"
import certificateImg1 from "../assets/certificate/IMG.jpg";
import certificateImg2 from "../assets/certificate/photo_2025-12-18_14-57-02.jpg";

export const education = [
  {
    id: 1,
    date: "2024 - Present",
    title: "Bachelor of Computer Science",
    organization: "Asia Europe University — Phnom Penh, Cambodia",
    description:
      "Faculty of Science and Technology. Pursuing core computer science concepts, software engineering principles, and advanced computing fundamentals.",
  },
  {
    id: 2,
    date: "2025",
    title: "Full Stack Web Development",
    organization: "Master IT",
    description:
      "Intensive training program focused on full-stack web technologies, modern frameworks, and practical application development.",
  },
  {
    id: 3,
    date: "2024",
    title: "English Language Program",
    organization: "Asia Europe Organization",
    description:
      "Completed structured coursework to strengthen professional English communication and literacy skills.",
  },
  {
    id: 4,
    date: "2021 - 2024",
    title: "High School Diploma",
    organization: "Prek Sleng High School — Kandal, Cambodia",
    description:
      "Graduated with general education secondary credentials establishing fundamental academic skills.",
  },
  {
    id: 5,
    date: "2020",
    title: "Computer Fundamentals & English",
    organization: "Ampov Prey Community School",
    description:
      "Initial foundational training in basic computer literacy and general English language studies.",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Bridging Course Certificate",
    issuer: "Asia Euro University",
    image: certificateImg1,
  },
  {
    id: 2,
    title: "2025 World Vocational College Skills Competition - Silver Award",
    issuer: "WVCSC Organizing Committee",
    image: certificateImg2,
  },
];

export const myProject = [
    {
    id: 1,
    title: "E-shop — E-Commerce Platform",
    description:
      "The first image showcases an e-commerce retail homepage designed in Khmer, featuring a clean layout with promotional banners, search capabilities, and product highlight sections. It displays key platform metrics",
    subDescription: "React.js, Tailwind CSS, mongoDB, Render, Node.js,REST APIs",
    href: "https://e-shop-7g1h.onrender.com/",
    Image: "/project_image/e-shop.png",
    tags: [
      { id: 1, name: "React.js", path: reactLogo },
      { id: 2, name: "Tailwind CSS", path: tailwindLogo },
      { id: 3, name: "mongoDB", path: mongodbLogo },
      { id: 4, name: "Render", path: renderLogo },
      { id: 5, name: "Node.js", path: nodeLogo },
      { id: 6, name: "REST API", path: apiLogo },
    ],
  },
      {
    id: 2,
    title: "E-Shop Management Dashboard",
    description:
      `The second image displays the backend administrative portal ("Generale Report") for the E-Shop platform, built to track daily operations and business metrics. It provides quick-statistic cards for revenue and pending invoices, entity counts for customers and suppliers, navigation modules for sales and inventory management, and graphical charts visualizing monthly financial totals.`,
    subDescription: "React.js, Tailwind CSS, mongoDB, Render, Node.js, REST APIs",
    href: "https://e-shop-dashboard.onrender.com",
    Image: "/project_image/e-shopdashboard.png",
    tags: [
      { id: 1, name: "React.js", path: reactLogo },
      { id: 2, name: "Tailwind CSS", path: tailwindLogo },
      { id: 3, name: "mongoDB", path: mongodbLogo },
      { id: 4, name: "Render", path: renderLogo },
      { id: 5, name: "Node.js", path: nodeLogo },
      { id: 6, name: "REST API", path: apiLogo },
    ],
  },
        {
    id: 3,
    title: "E-Fashion — E-Commerce Platform",
    description:
      `The third image presents "E-Fashion," a modern apparel e-commerce website designed with an intuitive header navigation bar, search functionality, contact support, and shopping cart indicators. Its primary hero banner highlights current style trends with clear call-to-action buttons ("Shop the collection" and "View this week's deals") leading directly into curated product categories.`,
    subDescription: "Rext.js, Tailwind CSS, mongoDB, Render, REST APIs",
    href: "https://e-commerces-with-next-js.onrender.com/",
    Image: "/project_image/e-fashion.png",
    tags: [
      { id: 1, name: "Next.js", path: nextLogo },
      { id: 2, name: "Tailwind CSS", path: tailwindLogo },
      { id: 3, name: "mongoDB", path: mongodbLogo },
      { id: 4, name: "Render", path: renderLogo },
      { id: 5, name: "REST API", path: apiLogo },
    ],
  },
  {
    id: 5,
    title: "Sbay — Social Platform",
    description:
      "Built a full-stack social networking application supporting user feeds, multimedia story updates, real-time post creation, and friend request management workflows. Structured relational database schemas in PostgreSQL to handle complex user relationships, post interactions, activity feeds, and user profile management. Developed an intuitive dashboard layout complete with dynamic sidebars, suggested user recommendations, and content discovery categories.",
    subDescription: "Next.js, Tailwind CSS, PostgreSQL, Render, REST APIs",
    href: "https://sbay.onrender.com",
    Image: "/project_image/next-socail.png",
    tags: [
      { id: 1, name: "Next.js", path: nextLogo },
      { id: 2, name: "Tailwind CSS", path: tailwindLogo },
      { id: 3, name: "PostgreSQL", path: postgresqlLogo },
      { id: 4, name: "Render", path: renderLogo },
      { id: 5, name: "REST API", path: apiLogo },
    ],
  },
  {
    id: 6,
    title: "Interactive E-Commerce Platform",
    description:
      "Built a single-page application (SPA) focused on a modern luxury aesthetic with smooth page transitions and scroll-triggered animations. Designed responsive product grids, brand logo marquees, and dynamic contact forms with real-time focus feedback.",
    subDescription: "React.js, Tailwind CSS, Framer Motion, GSAP",
    href: "https://react-eccomers.vercel.app",
    Image: "/project_image/react.png",
    tags: [
      { id: 1, name: "React.js", path: reactLogo },
      { id: 2, name: "Tailwind CSS", path: tailwindLogo },
      { id: 3, name: "Framer Motion", path: frameLogo },
      { id: 4, name: "GSAP", path: gsapLogo },
    ],
  },
  {
    id: 7,
    title: "Interactive E-Commerce Platform",
    description:
      "Developed a lightweight multi-page web application ground-up without external JavaScript frameworks to ensure a minimal footprint and optimal rendering performance. Structured responsive page layouts covering Home, Product Catalog, About Us, and Contact Us forms.",
    subDescription: "HTML5, CSS3, JavaScript",
    href: "https://e-commerce-zeta-five-16.vercel.app",
    Image: "/project_image/Html.png",
    tags: [
      { id: 1, name: "HTML5", path: htmlLogo },
      { id: 2, name: "CSS", path: cssLogo },
      { id: 3, name: "JavaScript", path: jsLogo },
    ],
  },
];
