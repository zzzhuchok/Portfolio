import React from "react";
import styled from "styled-components";
import { Container } from "../components/_styledComponents/StyledContainer";
import { Navigation } from "../components/navigation/Navigation";
import imgLogo from "./../assets/icons/colorLogo.svg";
import { SocialBlock } from "../components/socialBlock/SocialBlock";
import { LinkLogo } from "../components/logo/Logo";
import { navItems } from "../components/navigation/_navigationData";


const socialItems = [
  {
    iconId: "socialGithub",
    width: "30",
    height: "30",
  },
  {
    iconId: "socialTwit",
    width: "30",
    height: "30",
  },
  {
    iconId: "socialLinkedIn",
    width: "30",
    height: "30",
  },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <LinkLogo href="#" width="97" height="59" src={imgLogo} alt="logo"/>
          <Navigation navItems={navItems} />
          <SocialBlock socialItems={socialItems} />
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