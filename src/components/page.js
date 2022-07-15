import styled from "styled-components";
import React from "react";

const Page = styled.div`
  min-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function (props) {
  return <Page className="paw-div">{props.children}</Page>;
}
