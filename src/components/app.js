import React, { useEffect, useState } from "react";
import AboutMe from "./about-me";
import MainPage from "./main-page";
import OtherProjects from "./other-projects";
import TopProject from "./top-project";
import PawWrapper from "./paw-wrapper";

export default function () {
  return (
    <div className="container">
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      <TopProject></TopProject>
      <OtherProjects></OtherProjects>
      {window.innerWidth > 900 && <PawWrapper></PawWrapper>}
    </div>
  );
}
