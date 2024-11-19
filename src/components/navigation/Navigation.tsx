import React from "react";
import styled from "styled-components";

type NavigationPropsType = {
  navItems: Array<{
    id: number;
    href: string;
    text: string;
  }>;
};

export const Navigation = (props: NavigationPropsType) => {
  return (
    <StyledNavigation>
      <ul>
        {props.navItems.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.href}>{el.text}</a>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  font-family: ${(props) => props.theme.fontFamily?.secondary};
  color: ${(props) => props.theme.colors?.primary};
  font-size: ${(props) => props.theme.fontSize?.smallM};
  font-weight: 500;

  & ul {
    display: flex;
    column-gap: 45px;
  }

  & a {
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.colors?.textTitle};
      position: absolute;
      top: 120%;
      left: 0;
      z-index: 10;
      opacity: 0;
    }

    &:hover {
      color: ${props => props.theme.colors?.textTitle};

      &::before {
        opacity: 1;
      }
    }
  }
`;
