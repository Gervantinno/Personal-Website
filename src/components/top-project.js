import React from "react";
import Page from "./page";
import Card from "./card";
import projectsData from "../projects-data";

export default function () {
  return (
    <Page className="top-project">
      {window.innerWidth > 1120 && (
        <h2>
          This is my lattest and biggest project
          <br />
          which maybe is already in production by the time you read this
        </h2>
      )}
      {window.innerWidth > 1120 && (
        <span>*hover on it to see more details</span>
      )}
      <Card
        title={projectsData[0].title}
        description={projectsData[0].description}
        imgSrc={projectsData[0].imgSrc}
        isSmallImg={projectsData[0].isSmallImg}
        siteHref={projectsData[0].siteHref}
        codeHref={projectsData[0].codeHref}
      />
    </Page>
  );
}
