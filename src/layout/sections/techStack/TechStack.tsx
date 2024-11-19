import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { StyledSectionTitle } from "../../../components/_styledComponents/StyledSectionTitle";
import { SkillList } from "./SkillList";

const imgItems = new Array(12).fill(1).map((el, index) => el + index + ".svg");

export const TechStack = () => {
  return (
    <StyledTechStackSection>
      <Container>
        <StyledSectionTitle>My Tech Stack</StyledSectionTitle>
        <p>Technologies I’ve been working with recently</p>
        <SkillList items={imgItems}/>
      </Container>
    </StyledTechStackSection>
  );
};

const StyledTechStackSection = styled.section`

  ${StyledSectionTitle} {
    margin-bottom: 20px;
  }


  p {
    font-size: ${props => props.theme.fontSize?.mediumS};
    text-align: center;
    margin-bottom: 140px;
  }
`;
