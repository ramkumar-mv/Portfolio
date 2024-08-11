import React from "react";

const ProjectsCard = ({ title, category, image, description }) => {
  return (
    <div className="bg-bodyColor p-4 rounded-lg shadow-lg">
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-gray-500 text-lg">Image Coming Soon</span>
        )}
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-base mt-2">{description}</p>
    </div>
  );
};

export default ProjectsCard;
