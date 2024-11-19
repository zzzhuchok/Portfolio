import React from 'react'
import svgSprite from './../../assets/icons/_icons-sprite.svg'
import styled from 'styled-components';

type IconSvgSpritePropsType = {
  iconId: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  title?: string;
}

export const IconSvgSprite = (props: IconSvgSpritePropsType) => {
  const {width, height, fill,stroke,title='social'} = props;

  return (
    <StyledSvg width={width} height={height} fill={fill} stroke={stroke} xlinkTitle={title}>
      <use xlinkHref={`${svgSprite}#${props.iconId}`} />
    </StyledSvg>
  )
}


const StyledSvg = styled.svg.attrs(({stroke}) => ({
  stroke: stroke || 'none',
}))``