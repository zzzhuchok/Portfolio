import React from "react";
import styled from "styled-components";

export const Burger = () => {
  return (
    <StyledBurger>
      <span className="visually-hidden">Burger menu</span>
      <div></div>
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1;

  div {
    width: 20px;
    height: 2px;
    background-color: ${props => props.theme.colors?.primary};
    position: relative;
    z-index: 99;

    &::before, ::after {
      content: '';
      width: 20px;
      height: 2px;
      background-color: inherit;
      position: absolute;
      left: 0;
      z-index: 99;
    }

    &::before {
      top: -6px;
    }

    &::after {
      bottom: -6px;
    }
  }

  @media screen and (${props => props.theme.mediaBreakpoints?.tablet}) {
    display: flex;
  }
`;
