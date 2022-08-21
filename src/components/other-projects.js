import React, { memo } from "react";
import projectsData from "../projects-data";
import Card from "./card";
import Page from "./page";

export default memo(function () {
  const cards = projectsData.map((project) => {
    if (project.isPetProject)
      return (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          isSmall={true}
          siteHref={project.siteHref}
          codeHref={project.codeHref}
        />
      );
  });
  return (
    <Page className="other-projects">
      <h2>My pet projects</h2>
      {cards}
    </Page>
  );
});
