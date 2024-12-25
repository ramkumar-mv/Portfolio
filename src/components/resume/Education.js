import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Sept 2024 - Present"
          title="Project Associate"
          subTitle="IIT Madras"
          des="Currently working with Indian Army."
        />
        <ResumeCard
          badge="Jun 2024 - Aug 2024"
          title="AI/ML Developer"
          subTitle="Gemicates Technology"
          des="Worked on security system for IOCL and contributing to various automation projects."
        />
          <ResumeCard
          badge="Jan 2024 - May 2024"
          title="AI/ML Intern"
          subTitle="Adil Textiles Private Limited"
          des="Worked on fabric defect detection system and predictive maintenance solution."
        />
        <ResumeCard
          badge="Jun 2023 - Sept 2023"
          title="Machine Learning Intern"
          subTitle="Mitacs Globalink Research Internship"
          des="Collaborated with Austin Page and Prof Akramul Azim to develop EcoPal, an IoT and ML-based app that reduces carbon emissions by suggesting activity adjustments and enabling device control."
        />
        <ResumeCard
          badge="Dec 2022 - Apr 2023"
          title="Global Academic Intern"
          subTitle="National University of Singapore"
          des="Led the development of a custom VGG model for retail product prediction with hand gesture detection, including data collection, preprocessing, CNN implementation, and AzureML deployment."
        />
        <ResumeCard
          badge="Nov 2022 - Mar 2023"
          title="Computer Vision Intern"
          subTitle="Airdonex"
          des="Developed an automated drone landing system using computer vision with ArUco marker detection and validated it with MAVROS, Ardupilot, and MAVLink, achieving an 80% improvement in drone capabilities through OpenCV."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 - 2024"
          title="Bachelor of Technology in Electronics and Communication Engineering"
          subTitle="SRM Institute of Science and Technology"
          des=" 9.58 CGPA ,Graduated with a focus on Artificial Intelligence, Computer Vision, and IoT."
        />
        <ResumeCard
          badge="2018 - 2020"
          title="Higher Secondary Certificate"
          subTitle="Kids Club Matriculation Higher Secondary School"
          des="8.6 CGPA ,Completed higher secondary education with a focus on science and mathematics."
        />
      </div>
    </div>
  );
};

export default Education;
