import React from "react";
import { Button } from "./styled/button.styled";

export default function (props) {
  return (
    <div className={"card " + (props.isSmall ? "small" : "big")}>
      <img src={props.imgSrc} />
      <div className="card-content">
        <div className="card-content-wrapper">
          {props.isSmall && <h3>{props.title}</h3>}
          {props.isSmall && <p>{props.description}</p>}
          {!props.isSmall && (
            <>
              <p>List of used technologies</p>
              <ul className="technologies-list">
                {props.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}
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
