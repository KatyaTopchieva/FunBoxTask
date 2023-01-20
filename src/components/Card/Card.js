import React from "react";
import './Card.css';
import '../../images/cat.png';

function Card(props) {
  const cardName = props.cardName
  const productName = props.productName
  const portions = props.portions
  const mouses = props.mouses
  const weight = props.weight

  return (
    <section className="card" name={cardName}>
      <div className="card__product-border">
        <div className="card__product">
          <div className="card__text">
            <h3 className="card__description">Сказочное заморское яство</h3>
            <h1 className="card__title">Нямушка</h1>
            <h2 className="card__subtitle">{productName}</h2>
            <div className="card__bonus">
              <p className="card__bonus-portions">{portions}</p>
              <p className="card__bonus-mouses">{mouses}</p>
            </div>
          </div>
          <img className="card__image" src={require("../../images/cat.png")} alt="Кот"></img>
          <div className="card__weight">
            <h3 className="card__weight-number">{weight}</h3>
            <p className="card__weight-value">кг</p>
          </div>
        </div>
      </div>
      <div className="card__buy">Чего сидишь? Порадуй котэ,
        <a className="card__buy-link" href="#">&nbsp;купи.</a>
      </div>
    </section>
  )
};

export default Card;