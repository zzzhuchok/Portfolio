import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <Title>For any questions please mail me:</Title>
        <Link href="mailto:zhuk.rostislav@gmai.com">
          zhuk.rostislav@gmail.com
        </Link>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  font-weight: 700;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize?.largeXS};
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: inherit;
  color: ${(props) => props.theme.colors?.textTitle};
`;

const Link = styled.a`
  color: transparent;
  background: ${(props) => props.theme.colors?.textLinearGradient};
  background-clip: text;
`;
