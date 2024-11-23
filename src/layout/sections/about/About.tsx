import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { Avatar } from "../../../components/avatar/Avatar";
import backgroundImg from "./../../../assets/img/Abstract.svg";

export const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutInner>
          <Title>
            <span>Hi 👋,</span>
            <span>My name is</span>
            <b>Zhuk Rostislav</b>
            <span>I build things for web</span>
          </Title>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
        </AboutInner>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section``;

const AboutInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  @media screen and (${(props) => props.theme.mediaBreakpoints?.deskftopXS}) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin-right: auto;
  font-size: clamp(
    ${(props) => props.theme.fontSize?.mediumM},
    6vw,
    ${(props) => props.theme.fontSize?.largeXS}
  );

  b {
    background-color: #13b0f5;
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    color: transparent;
  }

  @media screen and (${(props) => props.theme.mediaBreakpoints?.deskftopXS}) {
    margin-right: 0;
    order: 2;
  }
`;

const AvatarWrapper = styled.div`
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: linear-gradient(#e70faa 0%, #13b0f5 100%);
  padding: 9px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    width: 628px;
    aspect-ratio: 1;
    position: absolute;
    top: -40%;
    left: -40%;
    z-index: -1;
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (${(props) => props.theme.mediaBreakpoints?.deskftopXS}) {
    order: 1;

    &::after {
      width: 100%;
      inset: 0;
      scale: 2;
      /* width: 300px; */
      /* inset: 0; */
      /* display: none; */
      /* top: 0;
      left: 0; */
    }
  }
`;
