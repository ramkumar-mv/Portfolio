import React from "react";
import {
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Crop Care AI"
            category="AI/Machine Learning"
            image={workImgThree}
            description="Utilized NPK sensors and ML algorithms to provide real-time crop recommendations and fertilizer quantities through a mobile app, promoting sustainable farming practices."
          />
          <ProjectsCard
            title="Plant Disease Prediction Using Raspberry Pi"
            category="AI/Machine Learning"
            description="Built a Raspberry Pi module with CNN for 94% accurate plant disease prediction and real-time notifications, including a doctors assistance tab."
          />
          <ProjectsCard
            title="Coalesce of IR and NDIR Sensors"
            category="IoT"
            description="Integrated IR and NDIR sensors for CO2 and gas/car detection, leveraging IoT and Zigbee technologies, and established a database for data storage and analysis."
          />
          <ProjectsCard
            title="User-Adaptive Bubble Tube"
            category="IoT/ML"
            image={workImgFour}
            description="Developed a multi-mode bubble tube for autistic children, using ML and IoT to adjust therapy settings based on analyzed actions."
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="User-Adaptive Double bubble bonanza"
            category="IoT/ML"
            image={workImgFive}
          />
          <ProjectsCard
            title="Water quality monitoring system (ML)"
            category="IoT/ML"
          />
          <ProjectsCard
            title="Smart Ambulance Service System"
            category="IoT"
            image={workImgSeven}
          />
          <ProjectsCard
            title="EcoPal - 2"
            category="IoT/ML"
            image={workImgEight}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
