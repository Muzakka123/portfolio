import React from 'react';

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center text-4xl md:text-5xl font-extrabold text-white pb-8">
      <p className="border-b-4 inline-block pb-2 border-blue-500">{title}</p>
    </div>
  );
};

export default Heading;