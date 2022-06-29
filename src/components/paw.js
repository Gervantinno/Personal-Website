import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledPaw = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  animation: implode 700ms ease-in-out;
  @keyframes implode {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0.8;
    }
    40% {
      opacity: 0.6;
    }
    60% {
      opacity: 0.4;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default class Paw extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("animationend", function () {
      this.remove();
    });
  }
  render() {
    return (
      <StyledPaw
        style={{
          left: this.props.left,
          top: this.props.top,
          transform: "rotate(" + this.props.degries + "deg)",
        }}
        src="https://res.cloudinary.com/dcei0q0px/image/upload/v1656344246/paw_lfbucp.png"
      />
    );
  }
}
