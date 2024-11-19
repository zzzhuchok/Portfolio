import React from "react";
import { Card } from "./Card";
import { ProjectCardType } from "./_projectCardsData";

type CardListPropsType = {
  cardItems: Array<ProjectCardType>;
};

export const CardList = (props: CardListPropsType) => {
  return (
    <>
      {props.cardItems.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </>
  );
};
