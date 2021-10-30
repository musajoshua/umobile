import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link).attrs({
  className:
    "uppercase bg-black-transparent backdrop-filter backdrop-blur py-5 px-11 text-white text-center box-content font-bold",
})`
  border-radius: 66px;
  font-size: 11px;
  width: 9rem;
  border: solid 1px black;

  @media (min-width: 768px) {
    border-radius: 0;
    font-size: 15px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 11rem;
  }
`;

export const LeftButton = styled(Button).attrs()`
  @media (min-width: 768px) {
    padding-left: 80px;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

export const RightButton = styled(Button).attrs()`
  @media (min-width: 768px) {
    padding-right: 80px;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
  }
`;
