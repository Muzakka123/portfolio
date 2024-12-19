// Project.tsx
import React from "react";
import Heading from "./Heading";
import Card from "./Card";

// Your projects data
const data = [
  {
    id: 0,
    title: "Simple Calculator",
    desc: "A simple and intuitive task management app built with React and TypeScript. Create, manage, and prioritize your tasks with ease. Set due dates, track progress, and stay organized.",
    img: "/images/photo12.png",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A simple and interactive countdown timer app built with Next.js. Set a custom timer and watch as the days, hours, minutes, and seconds tick away. Perfect for events, deadlines, studying, and workouts.",
    img: "/images/photo13.png",
    tags: ["Next.js", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Dynamic Resume Builder",
    desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
    img: "/images/photo15.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "Company Portfolio",
    desc: "A modern and responsive company portfolio website built using HTML, CSS, and JavaScript. Showcase your company's projects, services, and achievements with a clean and professional design.",
    img: "/images/photo14.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Furniture Website",
    desc: "A modern and responsive company portfolio website built using HTML, CSS, and JavaScript. Showcase your company's projects, services, and achievements with a clean and professional design.",
    img: "/images/photo11.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 6,
    title: "Services Website",
    desc: "A modern and responsive company portfolio website built using HTML, CSS, and JavaScript. Showcase your company's projects, services, and achievements with a clean and professional design.",
    img: "/images/photo16.png",
    tags: ["HTML", "CSS"],
  },
];

const Project = () => {
  return (
    <div
      id="projects"
      className="mx-auto pt-16 px-6 bg-gradient-to-r from-purple-500 to-blue-600 h-[120vh] w-full"
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
