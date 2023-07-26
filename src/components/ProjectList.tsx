import { ProjectCard } from "./ProjectCard";
import SolarSystem from "/public/solar-system.png";
import ShoppingCart from "/public/shopping-cart.png";
import RecipesApp from "/public/recipes-app.png";
import ToDoList from "/public/todo-list.png";
import SoccerClub from "/public/futebol-clube.png";
import AppDelivery from "/public/app-delivery.png";
import CarShop from "/public/car-shop.png";

const projects = [
  {
    name: "Sistema Solar",
    description: "Veja os planetas do sistema solar e missões feitas por agências espaciais.",
    image: SolarSystem,
    url: "https://solar-system.ymaatheus.me/",
    source: "https://github.com/yMaatheus/project-solar-system",
    tags: [
      { tech: "Javascript", color: "bg-yellow-400" },
      { tech: "ReactJS", color: "bg-blue-400" },
      { tech: "Styled Components", color: "bg-orange-400" },
    ],
  },
  {
    name: "App de Receitas",
    description: "Aplicativo de receitas de comidas e bebidas.",
    image: RecipesApp,
    source: "https://github.com/yMaatheus/project-recipes-app",
    tags: [
      { tech: "Javascript", color: "bg-yellow-400" },
      { tech: "ReactJS", color: "bg-blue-400" },
      { tech: "Redux", color: "bg-purple-400" },
      { tech: "HTML", color: "bg-orange-400" },
      { tech: "Bootstrap", color: "bg-blue-500" },
    ],
  },
  {
    name: "Shopping Cart",
    description: "Adicione produtos no carrinho.",
    image: ShoppingCart,
    source: "https://github.com/yMaatheus/project-shopping-cart",
    tags: [
      { tech: "Javascript", color: "bg-yellow-400" },
      { tech: "HTML", color: "bg-orange-400" },
      { tech: "CSS", color: "bg-blue-500" },
    ],
  },
  {
    name: "Lista de Tarefas",
    description: "Lista de tarefas construida em React Native.",
    image: ToDoList,
    source: "https://github.com/yMaatheus/ignite-todo-list",
    tags: [
      { tech: "Typescript", color: "bg-purple-400" },
      { tech: "React Native", color: "bg-blue-400" },
    ],
  },
  {
    name: "Futebol Clube",
    description: "API REST usando arquitetura DDD, POO e cobertura de testes.",
    image: SoccerClub,
    source: "https://github.com/yMaatheus/futebol-clube",
    tags: [
      { tech: "Typescript", color: "bg-purple-400" },
      { tech: "Express.js", color: "bg-gray-400" },
      { tech: "POO", color: "bg-red-500" },
      { tech: "Sequelize", color: "bg-green-300" },
      { tech: "MySQL", color: "bg-orange-400" },
      { tech: "Docker", color: "bg-blue-400" },
    ],
  },
  {
    name: "App de Delivery",
    description: "Aplicativo de delivery full stack para uma distribuidora de bebidas.",
    image: AppDelivery,
    source: "https://github.com/yMaatheus/delivery-app",
    tags: [
      { tech: "Javascript", color: "bg-yellow-400" },
      { tech: "ReactJS", color: "bg-blue-400" },
      { tech: "Zustand", color: "bg-gray-300" },
      { tech: "HTML", color: "bg-orange-400" },
      { tech: "Express", color: "bg-gray-400" },
      { tech: "JWT", color: "bg-pink-400" },
      { tech: "Joi", color: "bg-blue-300" },
      { tech: "CORS", color: "bg-gray-300" },
      { tech: "Sequelize", color: "bg-blue-500" },
      { tech: "Swagger", color: "bg-green-400" },
    ],
  },
  {
    name: "Shopping de Carros",
    description: "API REST para gerenciamento de uma concessionária de veículos.",
    image: CarShop,
    source: "https://github.com/yMaatheus/project-car-shop",
    tags: [
      { tech: "Typescript", color: "bg-purple-400" },
      { tech: "Express", color: "bg-gray-400" },
      { tech: "MongoDB", color: "bg-green-300" },
      { tech: "CORS", color: "bg-orange-400" },
      { tech: "Zod", color: "bg-blue-300" },
      { tech: "Swagger", color: "bg-green-400" },
    ],
  },
];

export function ProjectList() {
  return (
    <section className="flex flex-wrap gap-10 justify-center p-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  );
}
