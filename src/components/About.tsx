import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-600 to-blue-500 py-40 px-6 text-center min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
        <p className="text-xl text-gray-100 mb-8">
          I am a passionate web developer with expertise in creating dynamic and responsive websites using
          technologies like HTML, CSS, JavaScript, and React. I love solving problems and building impactful
          user experiences.
        </p>
        <p className="text-xl text-gray-100 mb-8">
          With experience in full-stack development and an eagerness to learn new technologies, I am always
          seeking opportunities to grow and collaborate with others.
        </p>
      </div>
    </section>
  );
};

export default About;
