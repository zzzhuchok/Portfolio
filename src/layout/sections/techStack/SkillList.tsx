import React from "react";
import styled from "styled-components";

type SkillListPropType = {
  items: Array<string>;
};

export const SkillList = (props: SkillListPropType) => {
  return (
    <StyledSkillList>
      {props.items.map((el, index) => {
        return (
          <li key={index}>
            <img
              width={120}
              height={120}
              src={`./assets/img/techStack/icon-${el}`}
              alt="techStack"
            />
          </li>
        );
      })}
    </StyledSkillList>
  );
};

const StyledSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(40px, 9vw ,100px) clamp(40px, 9vw ,80px);
  justify-content: center;
  align-items: center;

  li {
    max-width: 120px;
  }
`;
