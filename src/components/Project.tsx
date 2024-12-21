import React from "react";
import Heading from "./Heading";
import Card from "./Card";

// Your projects data
const data = [
  {
    id: 0,
    title: "Simple Calculator",
    desc: "A calculator app built with React and TypeScript to handle basic arithmetic operations.",
    img: "/images/photo12.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "An interactive countdown timer app built with Next.js. Ideal for events, deadlines, and workouts.",
    img: "/images/photo13.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Dynamic Resume Builder",
    desc: "A TypeScript-powered resume builder with real-time rendering and customization.",
    img: "/images/photo15.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Company Portfolio",
    desc: "A responsive company portfolio website showcasing projects and achievements.",
    img: "/images/photo14.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Furniture Website",
    desc: "A modern furniture website showcasing designs, products, and offers.",
    img: "/images/photo11.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "Services Website",
    desc: "A service-oriented portfolio website built using modern HTML and CSS techniques.",
    img: "/images/photo16.png",
    tags: ["HTML", "CSS"],
  },
];

const Project: React.FC = () => {
  return (
    <div
      id="projects"
      className="mx-auto pt-16 px-6 bg-gradient-to-r from-purple-500 to-blue-600 h-auto w-full"
    >
      <Heading title="My Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
