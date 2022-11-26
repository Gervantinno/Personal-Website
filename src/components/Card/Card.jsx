import React from "react";
import { Button } from "../styled/button.styled";
import css from "./Card.module.scss";

export default function (props) {
  console.log(css[`card ${props.isSmall ? "small" : "big"}`]);
  return (
    <div className={`${css["card"]} ${css[props.isSmall ? "small" : "big"]}`}>
      <img src={props.imgSrc} />
      <div className={css["content"]}>
        <div className={css["wrapper"]}>
          {props.isSmall && <h3>{props.title}</h3>}
          {props.isSmall && <p>{props.description}</p>}
          {!props.isSmall && (
            <>
              <p>List of used technologies</p>
              <ul className={css["technologies-list"]}>
                {props.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}
          <div className={css["button-wrapper"]}>
            {props.siteHref && (
              <Button href={props.siteHref} color="#CE6EE6" target={"_blank"}>
                Go to website
              </Button>
            )}
            {props.codeHref && (
              <Button href={props.codeHref} color="#99FF01" target={"_blank"}>
                Check code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
