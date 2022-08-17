import React, { memo } from "react";
import Page from "./page";
import PawCheckbox from "./paw-checkbox";

export default memo(function () {
  return (
    <Page className="main-page">
      <h1>
        Hi!
        <br />
        My name is Valera
        <br />I love programming and cats 🐱‍💻
      </h1>
      <span>Scroll to proceed</span>
      {window.innerWidth > 1120 && <PawCheckbox />}
    </Page>
  );
});
