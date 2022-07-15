import React, { useState, useEffect } from "react";
import Paw from "./paw";
import CalculateAngle from "../twoPointsAngle.js";
import { nanoid } from "nanoid";

export default function () {
  const [paws, setPaws] = useState([]);
  //adding paws that spawn after mouse
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
      earlyPos = { ...mousePos };

      setTimeout(() => {
        latePos = { ...mousePos };
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
              {
                left: latePos.x,
                top: latePos.y,
                degries: degries,
              },
            ];
          });
        }
      }, 70);
    }, 500);
  }, []);

  return (
    <>
      {paws.map((paw, index) => (
        <Paw key={index} left={paw.left} top={paw.top} degries={paw.degries} />
      ))}
    </>
  );
}
