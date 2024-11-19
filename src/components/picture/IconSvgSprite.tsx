import React from "react";
import svgSprite from "./../../assets/icons/_icons-sprite.svg";
import styled from "styled-components";

type IconSvgSpritePropsType = {
  iconId: string;
  width?: string;
  height?: string;
};

export const IconSvgSprite = (props: IconSvgSpritePropsType) => {
  const { width, height, iconId } = props;

  return (
    <StyledSvg width={width} height={height}>
      <use xlinkHref={`${svgSprite}#${iconId}`} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg``;
