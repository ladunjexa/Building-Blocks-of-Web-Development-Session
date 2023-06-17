const MAIN_PATH = "master/assets";

export const CONFIG = {
  assets: {
    css: `${MAIN_PATH}/css/style.css`,
    js: `${MAIN_PATH}/js/script.js`,
    media: `${MAIN_PATH}/media`,
    projects: `${MAIN_PATH}/media/projects`,
    tech: `${MAIN_PATH}/media/tech`,
  },

  ghRepo: {
    name: "Building-Blocks-of-Web-Development-Session",
    user: "ladunjexa",
  },
};

export const webData = {
  title: "ladunjexa —  Building Blocks of Web Session",

  navbar: {
    title: {
      heading1: null,
      span: "Building Blocks of Web Session",
      heading2: null,
    },
    githubLink: `https://github.com/${CONFIG.ghRepo.user}/${CONFIG.ghRepo.name}`,
    udemyLink: "https://www.udemy.com/course/10-mega-responsive-websites-with-html-css-and-javascript/",
  },

  hero: {
    title: {
      heading1: "Build 10 Big and Complete Responsive Websites with",
      span: "HTML, CSS and JavaScript.",
      heading2: null,
    },
    subtitle: {
      a: {
        text: "Udemy course",
        href: "https://www.udemy.com/course/10-mega-responsive-websites-with-html-css-and-javascript/",
      },
      span: "by Code And Create, George Lmoidze, Lasha Nozadze.",
    },
  },

  dialog: {
    headline: "Projects",
    buttonProps: {
      className:
        "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
      activeClassName:
        "from-indigo-800 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 focus:ring-indigo-500",
      type: "button",
    },
  },

  techstack: {
    divProps: {
      className: "h-12 transform hover:scale-125 duration-300 ease-in-out",
    },
  },
};

export const technologiesData = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
];

export const projectsData = [
  {
    name: "Variety-Of-Foods-Web",
    img: "vof-mockup.png",
    href: "VarietyOfFoods-Web",
  },
  {
    name: "Creative-Design-Web",
    img: "cd-mockup.png",
    href: "CreativeDesign-Web",
  },
  {
    name: "Business-Agency-Web",
    img: "bac-mockup.png",
    href: "BusinessAgency-Web",
  },
  { name: "Apple-eCommerce-Web", img: "apple-ec-mockup.png" },
  { name: "Developer-Portfolio-Web", img: "psm-mockup.png" },
  { name: "Cyberplex-Web", img: "cyberplex-mockup.png" },
  { name: "Architect-Web", img: "architect-mockup.png" },
  { name: "Travelio-Web", img: "travelio-mockup.png" },
  { name: "Winehouse-Web", img: "winehouse-mockup.png" },
  { name: "PayBae-Web", img: "paybae-mockup.png" },
];
