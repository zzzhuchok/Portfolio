import React from "react";
import styled from "styled-components";
import { Container } from "../components/_styledComponents/StyledContainer";
import { Navigation } from "../components/navigation/Navigation";
import imgLogo from "./../assets/icons/colorLogo.svg";
import { SocialMediaBlock } from "../components/socialMediaBlock/SocialMediaBlock";
import { LinkLogo } from "../components/logo/Logo";
import { navItems } from "../components/navigation/_navigationData";
import { SOCIAL_MEDIA_ITEMS } from "../data/socialMediaItems";


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <LinkLogo href="#" width="97" height="59" src={imgLogo} alt="logo"/>
          <Navigation navItems={navItems} />
          <SocialMediaBlock socialMediaItems={SOCIAL_MEDIA_ITEMS} />
        </HeaderInner>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-block: 20px;
  margin-bottom: 200px;
  background-color: ${props => props.theme.colors?.background};

  & a {
    flex-shrink: 0;
  }

  & nav {
    margin-left: auto;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
`;