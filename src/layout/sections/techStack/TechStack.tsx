import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { StyledSectionTitle } from "../../../components/_styledComponents/StyledSectionTitle";
import { SkillList } from "./SkillList";
import { StyledSectionSubtitle } from "../../../components/_styledComponents/StyledSectionSubtitle";

const imgItems = new Array(12).fill(1).map((el, index) => el + index + ".svg");

export const TechStack = () => {
  return (
    <TechStackSection id="techStack">
      <Container>
        <StyledSectionTitle>My Tech Stack</StyledSectionTitle>
        <StyledSectionSubtitle>
          Technologies I’ve been working with recently
        </StyledSectionSubtitle>
        <SkillList items={imgItems} />
      </Container>
    </TechStackSection>
  );
};

const TechStackSection = styled.section`
  ${StyledSectionTitle} {
    margin-bottom: 20px;
  }
`;