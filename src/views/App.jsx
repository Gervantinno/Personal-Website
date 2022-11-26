import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import MainPage from "./MainPage/MainPage";
import OtherProjects from "./OtherProjects/OtherProjects";
import BigProject from "../components/BigProject/BigProject";
import PawWrapper from "./PawWrapper/PawWrapper";
import projectsData from "../data/projects";
import { useSelector } from "react-redux";

export default function () {
  const isPrintingOn = useSelector((state) => state.isPrintingOn);

  return (
    <div className="container">
      <MainPage />
      <AboutMe />
      {projectsData.map((project) => {
        if (!project.isPetProject) {
          return <BigProject key={project.id} projectData={project} />;
        }
      })}
      <OtherProjects />
      {isPrintingOn && <PawWrapper />}
    </div>
  );
}
