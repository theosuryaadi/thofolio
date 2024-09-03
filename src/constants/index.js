import {
  react,
  javascript,
  tailwind,
  figma,
  webMA,
  jalin,
  mii,
  skilvul,
} from "../assets";

export const AppText = {
  hello: "Hello,",
  as: "as ",
  Theo: "I am Theofilus Surya Adi",
  aboutMeDescripion:
    "I am software developer working in IT industry from  last 2 Years as Front-end developer and UI/UX desiger.",
  Skills: "Tech Stack & ",
  Experience: "Experience",
  UIUXDesigner: "UI/UX Designer.",
  FrontedDeveloper: "Frontend Developer.",
  QA: "Quality Assurance",
  Portfolio: "My Portfolio",
  Companies: "the Companies",
  WorkedFor: "Work Experience in ",
  copyright: "Copyright by TheofilusSA @2024",
  footerTitle: "Thofolio Personal Website",
  footerDesc:
    "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.",
  footerQuotes: "- Dwayne Johnson -",
};

export const skillsList = [
  {
    id: 1,
    icon: javascript,
  },
  {
    id: 2,
    icon: react,
  },
  {
    id: 3,
    icon: tailwind,
  },
  {
    id: 4,
    icon: figma,
  },
];

export const workDetails = [
  {
    id: 3,
    year: "2024",
    compnayName: "PT. Mitra Integrasi Informatika",
    position: "Frontend Developer & UI/UX Designer",
  },
  {
    id: 2,
    year: "2023",
    compnayName: "PT. Jalin Pembayaran Nusantara",
    position: "Quality Assurance",
  },
  {
    id: 1,
    year: "2021",
    compnayName: "Skilvul • Intership MBKM",
    position: "UI/UX Designer",
  },
];

export const portfolios = [
  {
    id: 1,
    title: "BelajarKuy! - Online Course UX Case Study",
    type: "UI/UX",
    tools: [figma],
    desc: "Online course app design using Figma for Skilvull Challenge.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o5TbgZ5PhTupyWj6qwwJ8g.jpeg",
  },
  {
    id: 2,
    title: "Bank Jago: Last Wish Features — UX Case Study",
    type: "UI/UX",
    tools: [figma],
    desc: "Make a UI/UX design for the Last Wish feature for Bank Jago app.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5m2WVENzNwEbwnjRUAIICg.jpeg",
  },
  {
    id: 3,
    title: "Metrodata Academy",
    type: "Frontend",
    tools: [react, tailwind, figma],
    desc: "App build using ReactJs and Tailwind Css and UI/UX makes responsive mobile for internal project's Metrodata.",
    imageUrl: webMA,
  },
];

export const companies = [
  {
    id: 1,
    imageUrl: skilvul,
  },
  {
    id: 2,
    imageUrl: jalin,
  },
  {
    id: 3,
    imageUrl: mii,
  },
];
