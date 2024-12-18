import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { Avatar } from "../../../components/avatar/Avatar";
import backgroundImg from "./../../../assets/img/Abstract.svg";

export const About = () => {
  return (
    <AboutSection>
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
  justify-content: space-between;
  align-items: center;
  /* position: relative;
  z-index: 1; */
  `;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  font-size: ${(props) => props.theme.fontSize?.largeXS};

  b {
    background-color: #13b0f5;
    background-image: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    color: transparent;
  }
`;

const AvatarWrapper = styled.div`
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
  }
`;
