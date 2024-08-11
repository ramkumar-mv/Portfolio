import React from "react";
import ServicesCard from "./ServicesCard";
import { FaBrain, FaCamera, FaHome} from 'react-icons/fa'; // Importing relevant icons
import { IoMdAnalytics } from 'react-icons/io'; // Importing additional relevant icon

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
    <ServicesCard
      icons={<FaBrain />}
      title="Machine Learning"
      subTitle="Leveraging advanced algorithms and models to create intelligent solutions. Experienced with TensorFlow, Scikit-Learn, and data analysis."
    />
    <ServicesCard
      icons={<IoMdAnalytics />}
      title="Data Science"
      subTitle="Designing predictive models and data-driven solutions. Experience in energy consumption forecasting and user-specific dynamic models."
    />
    <ServicesCard
      icons={<FaCamera />}
      title="Computer Vision"
      subTitle="Expertise in image processing, object detection, and facial recognition systems. Proficient with OpenCV and YOLO."
    />
    <ServicesCard
      icons={<FaHome />}
      title="IoT Solutions"
      subTitle="Developing smart home and industrial automation systems. Skilled in integrating hardware with software for seamless operations."
    />
    </div>
  );
};

export default MyServices;
