import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-blue-600 to-purple-800 text-white py-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:mr-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to My Portfolio <br />
            <span className="text-purple-300">Web Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
          "Hi, I'm Muzakka Mir, a passionate beginner web developer eager to create functional and visually appealing websites. I specialize in HTML, CSS, and JavaScript and am learning modern tools like React to enhance my skills. My portfolio showcases projects that reflect my journey and growth as a developer. I'm committed to building user-friendly websites while continuously learning and improving."
          </p>
          <Link
            href="#contact"
            className="inline-block mt-6 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* Profile Image */}
        <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="w-52 h-52 md:w-72 md:h-72 bg-gradient-to-tr from-purple-500 to-purple-700 rounded-full mx-auto overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <img
              src="images/profile.png"
              alt="Muzakkamir Mir"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements (Stars or Floating Icons) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-20 z-0"></div>
    </section>
  );
};

export default Hero;
