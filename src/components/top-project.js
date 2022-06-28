import React from "react";
import { Page } from "./styled/page";
import Card from "./card";

export default function () {
  return (
    <Page className="top-project paw-div">
      <h2>
        This is my lattest and biggest project
        <br />
        Which maybe is already in production by the time you read this
      </h2>
      {window.innerWidth > 900 && <span>*hover on it to see more details</span>}
      <Card
        title="Totalsupport"
        description="This site is my first enterprice project, which is made with joomla.
        While working on it I improved al lot in making responsive design with minimum number of media queries"
        imgSrc="https://res.cloudinary.com/dcei0q0px/image/upload/v1656344247/totalsupport_pe5a3u.png"
        isSmallImg={false}
        siteHref="http://ts.totalsupport.ru/"
        codeHref={null}
      />
    </Page>
  );
}
