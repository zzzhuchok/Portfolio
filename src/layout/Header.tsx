import React from "react";
import styled from "styled-components";
import { Container } from "../components/_styledComponents/StyledContainer";
import { Navigation } from "../components/navigation/Navigation";
import imgLogo from "./../assets/icons/colorLogo.svg";
import { SocialMediaBlock } from "../components/socialMediaBlock/SocialMediaBlock";
import { LinkLogo } from "../components/logo/LinkLogo";
import { NAVIGATION_LINKS } from "../data/navigationLinks";
import { SOCIAL_MEDIA_ITEMS } from "../data/socialMediaItems";
import { Burger } from "../components/burger/Burger";


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <LinkLogo href="#" width="97" height="59" src={imgLogo} alt="logo"/>
          <Navigation navItems={NAVIGATION_LINKS} />
          <SocialMediaBlock socialMediaItems={SOCIAL_MEDIA_ITEMS} />
          <Burger />
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-block: 20px;
  margin-bottom: ${props => props.theme.section?.marginBottom};
  background-color: ${props => props.theme.colors?.background};

  & a {
    margin-right: auto;
    flex-shrink: 0;
  }

  & nav {

    @media screen and (${props => props.theme.mediaBreakpoints?.tablet}) {
      display: none;
    }
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;

  @media screen and (${props => props.theme.mediaBreakpoints?.tablet}) {
    column-gap: clamp(20px, 5vw, 50px);
  }
`;