import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaCss3 } from 'react-icons/fa'; // Using FontAwesome for icons

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">Web Development Skills</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
          Proficient in building responsive and visually appealing websites using HTML, CSS, JavaScript, and React. Currently expanding expertise by studying Next.js.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Core Technologies Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white">Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="skill-item text-center">
              <FaHtml5 className="text-7xl text-orange-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">HTML</h4>
            </div>
            <div className="skill-item text-center">
              <FaCss3Alt className="text-7xl text-blue-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">CSS</h4>
            </div>
            <div className="skill-item text-center">
              <FaJs className="text-7xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">JavaScript</h4>
            </div>
            <div className="skill-item text-center">
              <FaReact className="text-7xl text-cyan-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">React.js</h4>
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="skill-item text-center">
              <FaNodeJs className="text-7xl text-green-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">Node.js</h4>
            </div>
            <div className="skill-item text-center">
              <FaGitAlt className="text-7xl text-red-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">Git</h4>
            </div>
            <div className="skill-item text-center">
              <FaCss3 className="text-7xl text-teal-500 mb-4 mx-auto" />
              <h4 className="text-lg font-medium text-white">Tailwind CSS</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
