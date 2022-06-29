import React, { useEffect, useState } from "react";
import AboutMe from "./about-me";
import MainPage from "./main-page";
import OtherProjects from "./other-projects";
import Paw from "./paw";
import TopProject from "./top-project";
import CalculateAngle from "../twoPointsAngle.js";

export default function () {
  const [paws, setPaws] = useState([]);
  //adding paws that spawn after mouse
  if (window.innerWidth > 900) {
    useEffect(() => {
      let mousePos = {};
      let earlyPos = {};
      let latePos = {};
      let isPaw;

      window.addEventListener("mousemove", (e) => {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
        if (e.target.className.includes("paw-div")) isPaw = true;
        else isPaw = false;
      });

      window.addEventListener("mouseleave", (e) => {
        mousePos.x = -1;
        mousePos.y = -1;
      });

      setInterval(function () {
        if (!isPaw) return;
        earlyPos.x = mousePos.x;
        earlyPos.y = mousePos.y;
        setTimeout(() => {
          latePos.x = mousePos.x;
          latePos.y = mousePos.y;
          if (
            earlyPos.x > 0 &&
            earlyPos.y > 0 &&
            latePos.x > 0 &&
            latePos.y > 0 &&
            earlyPos.x != latePos.x &&
            earlyPos.y != latePos.y
          ) {
            let degries = CalculateAngle(
              earlyPos.x,
              earlyPos.y,
              latePos.x,
              latePos.y
            );

            setPaws((prevPaws) => {
              return [
                ...prevPaws,
                { left: latePos.x, top: latePos.y, degries: degries },
              ];
            });
          }
        }, 70);
      }, 500);
    }, []);
  }

  return (
    <div className="container">
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      <TopProject></TopProject>
      <OtherProjects></OtherProjects>
      {paws.map((paw) => (
        <Paw left={paw.left} top={paw.top} degries={paw.degries} />
      ))}
    </div>
  );
}
