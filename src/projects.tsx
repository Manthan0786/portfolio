import Image from "next/image";
import nearbuy from "../public/project images/nearbuy.png";
import wordle from "../public/project images/Wordle.png";
import zazra from "../public/project images/Zazra.png";

export default function Projects() {
  const projects = [
    {
      id: 0,
      img: nearbuy,
      name: "Nearbuy",
      description:
        "NearBuy is a personal project with an idea of an online marketplace connecting local sellers with buyers. Sellers can list anything from electronics, kitchenware, furniture, clothing, and more without stepping out of the home. Buyers can purchase the product online and get the product delivered the same day.",
      href: "https://github.com/Manthan0786/nearbuy",
    },
    {
      id: 1,
      img: wordle,
      name: "Wordle",
      description:
        "Wordle is a guess game with a grid of 5x6 columns. It is a clone of the original wordle game developed by engineer Josh Wardle. It uses CSS and JavaScript to project whether the guess of the user is right or wrong.",
      href: "https://manthan0786.github.io/Wordle/",
    },
    {
      id: 2,
      img: zazra,
      name: "Zazra",
      description:
        "ZAZRA is a web app for construction managers to manage projects and tasks. Streamline workflow and accomplish more in less time while on the go. Get an overview of the company progress from a distance and in real-time. Manage projects, create tasks, and manage resources more efficiently than ever.",
      href: "https://github.com/Manthan0786",
    },
  ];

  return (
    <>
      <div className="projects_container">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl">
          Projects
        </h1>
        <div className="projects_card_container">
          {projects.map((project, index) => (
            <div key={project.id} className="project_card">
              <Image
                src={project.img}
                alt={`project ${index}`}
                style={{ width: "500px", borderRadius: "5px" }}
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.href} className="project_link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
