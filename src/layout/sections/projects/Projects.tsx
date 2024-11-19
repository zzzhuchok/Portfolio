import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";
import { StyledSectionTitle } from "../../../components/_styledComponents/StyledSectionTitle";
import { CardList } from "./CardList";
import { PROJECT_CARD_DATA } from "./_projectCardsData";
import { StyledSectionSubtitle } from "../../../components/_styledComponents/StyledSectionSubtitle";

export const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Container>
        <StyledSectionTitle>Projects</StyledSectionTitle>
        <StyledSectionSubtitle>Things I’ve built so far</StyledSectionSubtitle>
        <ProjectCardsWrapper>
          <CardList cardItems={PROJECT_CARD_DATA} />
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

const ProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
