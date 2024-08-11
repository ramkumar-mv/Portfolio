import React from "react";
import Title from "../home/Title";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <Title title="Latest" subTitle="Posts" />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-400">
            We are working on some exciting content for our blog. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
