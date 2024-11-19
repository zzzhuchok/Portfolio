import React from "react";
import styled from "styled-components";
import { Container } from "../components/_styledComponents/StyledContainer";
import { SocialBlock } from "../components/socialBlock/SocialBlock";
import imgLogo from "./../assets/icons/blackLogo.svg";
import { LinkLogo } from "../components/logo/Logo";
import { navItems } from "../components/navigation/_navigationData";
import { Navigation } from "../components/navigation/Navigation";

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
          <SocialBlock socialItems={socialItems} />
        </FooterTop>

        <FooterBottom>
          <Navigation navItems={navItems} />
          <Signature>
            Designed and built by <span>zzzhuchok</span> with <span>Love</span>{" "}
            & <span>Coffee</span>
          </Signature>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(66, 68, 110, 0.3);
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;

a:hover {
  color: ${props => props.theme.colors?.textTitle}
}
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding-block: 40px;
`;

const Signature = styled.div`
  background-image: ${(props) => props.theme.colors?.textLinearGradient};
  background-clip: text;

  span {
    color: transparent;
  }
`;
