import React from "react";
import Card from "../Card/Card";

function CardFuaGra(props) {
  return (
    <Card
      name="Fua-gra"
      firstDescription="Сказочное заморское яство"
      secondDescription="Котэ не одобряет?"
      productName="с фуа-гра"
      portions="10 порций"
      mouses="мышь в подарок"
      weight="0,5"
      buyResponse="Печень утки разварная с артишоками."
      productsInStocke={2}
    />
  )
};

export default CardFuaGra;