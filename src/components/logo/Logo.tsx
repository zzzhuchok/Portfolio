import React from "react";
import styled from "styled-components";

type LogoPropsType = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  href?: string;
};

export const LinkLogo = (props: LogoPropsType) => {
  return (
    <StyledLinkLogo href={props.href}>
      <LogoIMG width={props.width} height={props.height} src={props.src} alt={props.alt}/>
    </StyledLinkLogo>
  );
};

const StyledLinkLogo = styled.a.attrs((props) => ({
  href: props.href || "##",
}))``;

const LogoIMG = styled.img``;
