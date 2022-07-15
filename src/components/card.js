import React from "react";
import { Button } from "./styled/button.styled";

export default function (props) {
  return (
    <div className={"card " + (props.isSmallImg ? "small" : "big")}>
      <img src={props.imgSrc} />
      <div className="card-content">
        <div className="card-content-wrapper">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <Button href={props.siteHref} color="#CE6EE6" target={"_blank"}>
            Go to website
          </Button>
          {props.codeHref && (
            <Button href={props.codeHref} color="#99FF01" target={"_blank"}>
              Check code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
