import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Ramkumar M V</h2>
          <p className="text-base leading-6 ">
          I am an AI/ML Developer at IIT Madras, specializing in Artificial Intelligence, Computer Vision, and IoT. With a strong background in Electronics, I focus on creating intelligent systems that learn from real-time data. Passionate about advancing technology and machine learning.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Education:</span>
            B.Tech (ECE), SRM IST
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Chennai, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
