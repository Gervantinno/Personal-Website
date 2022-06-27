import React from "react";
import projectsData from "../projects-data";
import Card from "./card";
import { Page } from "./styled/page";

export default function () {
  const cards = projectsData.map((project) => {
    return (
      <Card
        key={project.id}
        title={project.title}
        description={project.description}
        imgSrc={project.imgSrc}
        isSmallImg={project.isSmallImg}
        siteHref={project.siteHref}
        codeHref={project.codeHref}
      />
    );
  });
  return (
    <Page className="paw-div">
      <h2>Other prjects are</h2>
      <div className="project-wrapper">{cards}</div>
    </Page>
  );
}
