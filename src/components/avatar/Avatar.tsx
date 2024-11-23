import React from "react";
import styled from "styled-components";
import img from "./../../assets/img/photo 1.jpg";

export const Avatar = () => {
  return <StyledAvatar width={350} height={350} src={img} alt="Avatar" />;
};

const StyledAvatar = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;
