import styled from "styled-components";

export const StyledSectionSubtitle = styled.p`
  font-size: clamp(
    ${(props) => props.theme.fontSize?.smallM},
    3vw,
    ${(props) => props.theme.fontSize?.mediumS}
  );
  text-align: center;
  margin-bottom: clamp(60px, 9vw, 120px);
`;
