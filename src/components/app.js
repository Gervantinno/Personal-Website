import React, { useEffect, useState } from "react";
import AboutMe from "./about-me";
import MainPage from "./main-page";
import OtherProjects from "./other-projects";
import BigProject from "./big-project";
import PawWrapper from "./paw-wrapper";
import projectsData from "../projects-data";
import { useSelector } from "react-redux";

export default function () {
  const isPrintingOn = useSelector((state) => state.isPrintingOn);

  return (
    <div className="container">
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      {projectsData.map((project, index) => {
        if (!project.isPetProject) {
          return (
            <BigProject
              key={index}
              description={
                <h2>
                  This is my lattest and biggest project
                  <br />
                  which maybe is already in production by the time you read this
                </h2>
              }
              projectData={project}
            ></BigProject>
          );
        }
      })}
      <OtherProjects></OtherProjects>
      {isPrintingOn && <PawWrapper></PawWrapper>}
    </div>
  );
}
