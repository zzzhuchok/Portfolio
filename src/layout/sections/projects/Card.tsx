import React from "react";
import styled from "styled-components";
import { IconSvgSprite } from "../../../components/picture/IconSvgSprite";

export type CardPropsType = {
  id: number;
  previewImg: string;
  title: string;
  description: string;
  techStack: string;
  previewLink: string;
  codeLink: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <CardHeader>
        <CardImg src={`./assets/img/projects/preview${props.previewImg}`} />
      </CardHeader>

      <CardBody>
        <StyledCardTitle>{props.title}</StyledCardTitle>
        <StyledCardDescription>{props.description}</StyledCardDescription>
        <StyledCardTags>
          Tech stack : <span>{props.techStack}</span>
        </StyledCardTags>

        <CardFooter>
          <StyledCardLink href={props.previewLink}>
            <IconSvgSprite iconId="iconLink" width="20" height="20" />
            <span>Live Preview</span>
          </StyledCardLink>
          <StyledCardLink href={props.codeLink}>
            <IconSvgSprite iconId="socialGithub" width="20" height="20" />
            <span>View Code</span>
          </StyledCardLink>
        </CardFooter>
      </CardBody>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  max-width: 375px;
  border-radius: ${(props) => props.theme.border?.radius};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors?.backgroundCard};
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
`;

const CardHeader = styled.header`
  max-width: 375px;
  max-height: 260px;
  overflow: hidden;
`;

const CardBody = styled.div`
  padding: 30px;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardImg = styled.img.attrs(({ alt }) => ({
  alt: alt || "",
  width: 375,
  height: 260,
}))`
  max-height: 260px;
  object-fit: cover;
`;

const StyledCardTitle = styled.h3`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize?.mediumXS};
  text-align: center;
  color: ${(props) => props.theme.colors?.textTitle};
`;

const StyledCardDescription = styled.p`
  margin-bottom: 10px;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize?.smallS};
  text-align: justify;
`;

const StyledCardTags = styled.div`
  margin-bottom: 30px;
  font-size: ${(props) => props.theme.fontSize?.smallXS};

  span {
    font-weight: 300;
    font-size: 0.875em;
  }
`;

const StyledCardLink = styled.a.attrs(({ href }) => ({
  href: href || "##",
}))`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: ${(props) => props.theme.fontSize?.smallXS};
  color: ${(props) => props.theme.colors?.textTitle};
  position: relative;

  & svg {
    fill: currentColor;
    stroke: currentColor;
  }

  & span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      right: 0;
      bottom: -2px;
      background-color: currentColor;
      opacity: 0;
      z-index: 1;
      transition: all ${(props) => props.theme.transition?.duration};
    }
  }

  &:hover span::after {
    opacity: 1;
  }
`;
