import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/_styledComponents/StyledContainer";

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container>
        <Title>For any questions please{"\u00A0"}mail{"\u00A0"}me:</Title>
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
  font-size: clamp(
    ${(props) => props.theme.fontSize?.mediumXS},
    6vw,
    ${(props) => props.theme.fontSize?.largeXS}
  );
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

  font-size: clamp(
    ${(props) => props.theme.fontSize?.smallM},
    6vw,
    ${(props) => props.theme.fontSize?.largeXS}
  );
`;
