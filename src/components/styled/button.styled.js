import styled from "styled-components";

export const Button = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 0.3em;
  padding: 0.5em 1em;
  font-weight: 600;
  transition: color 300ms ease-out, background 300ms ease-out;

  &:active,
  &:focus,
  &:active:focus,
  &:hover {
    outline: none;
    background: ${(props) => props.color};
    color: black;
  }
`;
