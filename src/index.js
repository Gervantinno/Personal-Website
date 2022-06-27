import React from "react";
import ReactDOM from "react-dom/client";
import AboutMe from "./components/about-me";
import MainPage from "./components/main-page";
import OtherProjects from "./components/other-projects";
import TopProject from "./components/top-project";
import "./custom.scss";

//rendering the page
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <div className="container">
    <MainPage></MainPage>
    <AboutMe></AboutMe>
    <TopProject></TopProject>
    <OtherProjects></OtherProjects>
  </div>
);

//adding horizontal scrolling
document.addEventListener("wheel", (e) => {
  document.querySelector(".container").scrollLeft += e.deltaY;
});

//adding paws that spawn after mouse
if (window.innerWidth > 900) {
  let mousePos = {};
  let earlyPos = {};
  let latePos = {};
  let isPaw;

  document.addEventListener("mousemove", (e) => {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
    if (e.target.className.includes("paw-div")) isPaw = true;
    else isPaw = false;
  });

  document.addEventListener("mouseleave", (e) => {
    mousePos.x = -1;
    mousePos.y = -1;
  });

  const draw = setInterval(function () {
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
        let degries = 0;

        function dist(x1, y1, x2, y2) {
          var a = x1 - x2;
          var b = y1 - y2;

          return Math.sqrt(a ** 2 + b ** 2);
        }

        degries =
          Math.acos(
            dist(earlyPos.x, earlyPos.y, latePos.x, earlyPos.y) /
              dist(earlyPos.x, earlyPos.y, latePos.x, latePos.y)
          ) *
          (180 / Math.PI);

        if (latePos.x > earlyPos.x && latePos.y < earlyPos.y) {
          degries = 90 - degries;
        } else if (latePos.x > earlyPos.x && latePos.y > earlyPos.y) {
          degries = 90 + degries;
        } else if (latePos.x < earlyPos.x && latePos.y > earlyPos.y) {
          degries = 270 - degries;
        } else if (latePos.x < earlyPos.x && latePos.y < earlyPos.y) {
          degries = 270 + degries;
        }

        const styles = `
        left: ${latePos.x}px;
        top: ${latePos.y}px;
        transform: rotate(${degries}deg);`;

        const image = new Image();
        image.classList.add("paw");
        image.src =
          "https://res.cloudinary.com/dcei0q0px/image/upload/v1656344246/paw_lfbucp.png";
        image.style = styles;
        document
          .querySelector("#root")
          .appendChild(image)
          .addEventListener("animationend", function () {
            this.remove();
          });
      }
    }, 70);
  }, 500);
}
