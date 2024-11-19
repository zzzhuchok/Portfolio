import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { StyledSectionTitle } from "../../../components/_styledComponents/StyledSectionTitle";
import { CardList } from "./CardList";
import { projectCardsData } from "./_projectCardsData";

export const Projects = () => {
  return (
    <ProjectSection>
      <Container>
        <StyledSectionTitle>Projects</StyledSectionTitle>
        <Subtitle>Things I’ve built so far</Subtitle>
        <ProjectCardsWrapper>
          <CardList cardItems={projectCardsData} />
        </ProjectCardsWrapper>
      </Container>
    </ProjectSection>
  );
};

const ProjectSection = styled.section`
  ${StyledSectionTitle} {
    margin-bottom: 20px;
  }
`;

const Subtitle = styled.div`
  font-size: ${(props) => props.theme.fontSize?.mediumS};
  text-align: center;
  margin-bottom: 50px;
`;

const ProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
