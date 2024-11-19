import React from "react";
import { Card, CardPropsType } from "./Card";

type CardListPropsType = {
  cardItems: Array<CardPropsType>;
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
