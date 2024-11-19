import React from "react";
import styled from "styled-components";
import { IconSvgSprite } from "../picture/IconSvgSprite";
import { SocialMediaItemsType } from "../../data/socialMediaItems";

type SocialMediaBlockProps = {
  socialMediaItems: Array<SocialMediaItemsType>;
};

export const SocialMediaBlock = (props: SocialMediaBlockProps) => {
  return (
    <StyledSocialBlock>
      {props.socialMediaItems.map((el) => {
        return (
          <a
            key={el.id}
            href={el.href}
            title={el.title}
            target="_blank"
            rel="noreferrer"
          >
            <IconSvgSprite
              iconId={el.iconId}
              width={el.width}
              height={el.height}
            />
          </a>
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
      fill: ${(props) => props.theme.colors?.textTitle};
    }
  }
`;
