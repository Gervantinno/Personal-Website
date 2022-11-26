import React, { memo } from "react";
import Page from "../../layouts/Page";
import PawCheckbox from "../../components/PawCheckbox/PawCheckbox";

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
