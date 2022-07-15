import React from "react";
import projectsData from "../projects-data";
import Card from "./card";
import { Page } from "./styled/page";

export default function () {
  const cards = projectsData.map((project, index) => {
    //first project is displayed earlier
    if (index > 0)
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
    <Page className="other-projects paw-div">
      <h2>My other projects</h2>
      {cards}
    </Page>
  );
}
