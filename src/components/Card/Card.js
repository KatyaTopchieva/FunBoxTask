import React from "react";
import './Card.css';
import '../../images/cat.png';
import { useState } from "react";

function Card(props) {
  const cardName = props.cardName
  const productName = props.productName
  const portions = props.portions
  const mouses = props.mouses
  const weight = props.weight
  const buyResponse = props.buyResponse
  const secondDescription = props.secondDescription
  const firstDescription = props.firstDescription
  
  const [clickButton, setClickButton] = useState(false);
  
  function handleButton() {
    setClickButton(true);
  }

  return (
    <section className="card" name={cardName}>
      <div className={`${ clickButton ? "card__product-border card__product-border-pink" :
        "card__product-border"}`}>
        <div className="card__product">
          <div className="card__text">
            <h3 className={`${ clickButton ? "card__description card__description-pink" : "card__description"}`}>
              { clickButton ?  secondDescription : firstDescription }
            </h3>
            <h1 className="card__title">Нямушка</h1>
            <h2 className="card__subtitle">{productName}</h2>
            <div className="card__bonus">
              <p className="card__bonus-portions">{portions}</p>
              <p className="card__bonus-mouses">{mouses}</p>
            </div>
          </div>
          <img className="card__image" src={require("../../images/cat.png")} alt="Кот"></img>
          <div className={`${clickButton ? "card__weight card__weight-pink" : "card__weight"}`}>
            <h3 className="card__weight-number">{weight}</h3>
            <p className="card__weight-value">кг</p>
          </div>
        </div>
      </div>
      <div className="card__buy-container">
        { clickButton ?
          <p className="card__buy-response">{buyResponse}</p> :
          <div className="card__buy">Чего сидишь? Порадуй котэ,
            <button className="card__buy-button" onClick={handleButton} type="button">&nbsp;купи.</button>
          </div>
        }        
      </div>
    </section>
  )
};

export default Card;