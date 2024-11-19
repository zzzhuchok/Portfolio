import React from "react";
import styled from "styled-components";
import { IconSvgSprite } from "../picture/IconSvgSprite";

type SocialBlockProps = {
  socialItems: Array<{
    iconId: string;
    width?: string;
    height?: string;
  }>;
};

export const SocialBlock = (props: SocialBlockProps) => {
  return (
    <StyledSocialBlock>
      {props.socialItems.map((el, index) => {
        return (
          <IconSvgSprite
            key={index}
            iconId={el.iconId}
            width={el.width}
            height={el.height}
            title={''}
          />
        );
      })}
    </StyledSocialBlock>
  );
};

const StyledSocialBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme.colors?.primary};

    &:hover {
      fill: ${props => props.theme.colors?.textTitle}
    }
  }
`;
