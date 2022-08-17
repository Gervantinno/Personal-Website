import React, { memo } from "react";
import Page from "./page";

export default memo(function () {
  return (
    <Page className="about-me">
      <h2>
        I am a fourth year programming college student
        <br />
        with experience in
        <br />
        <br />
        <i>ENTERPRICE DEVELOPMENT</i>
      </h2>
    </Page>
  );
});
