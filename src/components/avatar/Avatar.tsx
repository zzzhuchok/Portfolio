import React from "react";
import styled from "styled-components";
import img from "./../../assets/img/photo 1.jpg";

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <StyledAvatar width={350} height={350} src={img} alt="Avatar" />
    </AvatarWrapper>
  );
};

const AvatarWrapper = styled.div`
  width: 350px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: linear-gradient(#e70faa 0%, #13b0f5 100%);
  padding: 9px;
  position: relative;
`;

const StyledAvatar = styled.img`
  height: auto;
  border-radius: 50%;
`;
