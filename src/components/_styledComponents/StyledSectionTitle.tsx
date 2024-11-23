import styled from "styled-components";

export const StyledSectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily?.primary};
  font-weight: 700;
  font-size: clamp(
    ${(props) => props.theme.fontSize?.mediumS},
    5vw,
    ${(props) => props.theme.fontSize?.mediumM}
  );
  line-height: 1.5;
  text-align: center;
  color: #ccc;
`;
