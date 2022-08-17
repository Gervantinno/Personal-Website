import React, { memo } from "react";
import Page from "./page";
import Card from "./card";

export default memo(function (props) {
  return (
    <Page className="big-project">
      <h2>{props.projectData.title}</h2>
      <p>{props.projectData.description}</p>

      {window.innerWidth > 1120 && (
        <span>*hover on it to see more details</span>
      )}
      <Card
        imgSrc={props.projectData.imgSrc}
        isSmall={false}
        technologies={props.projectData.technologies}
        siteHref={props.projectData.siteHref}
        codeHref={props.projectData.codeHref}
      />
    </Page>
  );
});
