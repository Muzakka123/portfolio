import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px] rounded-lg bg-gray-900 shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative">
        <Image
          className="w-full h-auto object-cover"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>

      {/* Text Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="text-xl font-semibold text-white">{title}</div>

        {/* Description */}
        <div className="text-sm text-gray-300">{desc}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-xs font-medium transform transition-all duration-300 hover:bg-yellow-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;