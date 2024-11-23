import React from "react";
import styled from "styled-components";
import { Container } from "../components/_styledComponents/StyledContainer";
import { SocialMediaBlock } from "../components/socialMediaBlock/SocialMediaBlock";
import imgLogo from "./../assets/icons/blackLogo.svg";
import { LinkLogo } from "../components/logo/LinkLogo";
import { NAVIGATION_LINKS } from "../data/navigationLinks";
import { Navigation } from "../components/navigation/Navigation";
import { SOCIAL_MEDIA_ITEMS } from "../data/socialMediaItems";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterTop>
          <LinkLogo src={imgLogo} href="#" alt="logo" />
          <Contacts>
            <a href="tel:+91 12345 09876">+91 12345 09876</a>
            <a href="mailto:info@example.com">info@example.com</a>
          </Contacts>
          <SocialMediaBlock socialMediaItems={SOCIAL_MEDIA_ITEMS} />
        </FooterTop>

        <FooterBottom>
          <Navigation navItems={NAVIGATION_LINKS} />
          <Signature>
            Designed and built by{"\u00A0"}<span>zzzhuchok</span>{"\u00A0"}with{"\u00A0"}<span>Love</span>{"\u00A0"}&{"\u00A0"}<span>Coffee</span>
          </Signature>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(20px, 5vw, 50px);
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(66, 68, 110, 0.3);

  & > a {
    margin-right: auto;
    @media screen and (${(props) => props.theme.mediaBreakpoints?.phone}) {
      display: none;
    }
  }
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  a:hover {
    color: ${(props) => props.theme.colors?.textTitle};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-block: 40px;

  & nav {
    margin-right: auto;
    @media screen and (${(props) => props.theme.mediaBreakpoints?.tablet}) {
      display: none;
    }
  }
`;

const Signature = styled.div`
  background-image: ${(props) => props.theme.colors?.textLinearGradient};
  background-clip: text;
  text-align: center;

  span {
    color: transparent;
  }

`;
