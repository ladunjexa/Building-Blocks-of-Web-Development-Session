let projectsList = [
  { name: "Variety-Of-Foods-Web", img: "vof-mockup.png", href: "VarietyOfFoods-Web" },
  { name: "Creative-Design-Web", img: "cd-mockup.png", href: "CreativeDesign-Web" },
  { name: "Business-Agency-Web", img: "bac-mockup.png", href: "BusinessAgency-Web" },
  { name: "Apple-eCommerce-Web", img: "apple-ec-mockup.png" },
  { name: "Developer-Portfolio-Web", img: "psm-mockup.png" },
  { name: "Cyberplex-Web", img: "cyberplex-mockup.png" },
  { name: "Architect-Web", img: "architect-mockup.png" },
  { name: "Travelio-Web", img: "travelio-mockup.png" },
  { name: "Winehouse-Web", img: "winehouse-mockup.png" },
  { name: "PayBae-Web", img: "paybae-mockup.png" },
];

let technologiesUsed = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
];

let udemyCourseLink =
  "https://www.udemy.com/course/10-mega-responsive-websites-with-html-css-and-javascript/";
let githubRepoLink =
  "https://github.com/ladunjexa/Building-Blocks-of-Web-Development-Session";

let buttonProps = {
  className:
    "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
  type: "button",
};

let techContainerClasses =
  "h-12 transform hover:scale-125 duration-300 ease-in-out";

let techContainer = document.querySelector(".technologies-container");
let portfolioList = document.querySelector(".portfolio-list");
let projectContainer = document.querySelector(".macbook-project-mockup");
let projectHref = document.querySelector(".project-href");
let projectHrefBtn = document.querySelector(".project-href-button");
let udemyNavLink = document.querySelector(".udemy-button-link");
let githubNavLink = document.querySelector(".github-button-link");

window.onload = function () {

  // Set links
  udemyNavLink.setAttribute("href", udemyCourseLink);
  githubNavLink.setAttribute("href", githubRepoLink);

  // Set technologies
  technologiesUsed.forEach((tech) => {
    let img = document.createElement("img");

    img.className = techContainerClasses;
    img.src = `master/assets/media/${tech.img}`;
    img.alt = `${tech.name} icon`;

    techContainer.appendChild(img);
  });

  // Set projects
  projectsList.forEach((project) => {
    let button = document.createElement("button");

    button.id = `button-${project.name}`;
    button.className = buttonProps.className;
    button.type = buttonProps.type;
    button.textContent = `${formatProjectName(project.name)}`;
    button.onclick = () => loadProject(project);

    portfolioList.appendChild(button);
  });

  // Load random initial project
  loadProject(projectsList[Math.floor(Math.random() * projectsList.length)]);
};

// Load project
const loadProject = (project) => {
  projectContainer.setAttribute("src", `master/assets/media/projects/${project.img}`);
  projectHref.setAttribute("href", `https://ladunjexa.github.io/Building-Blocks-of-Web-Development-Session/${project.href ?? project.name}/`);
  projectHrefBtn.innerHTML = `Go to ${formatProjectName(project.name)}`;
};

function formatProjectName(name) {
  return name.slice(0, name.length - 4)
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
