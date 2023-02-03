import React, { useState, useEffect } from "react";
import './Card.css';
import '../../images/cat.png';

function Card(props) {
  const cardName = props.cardName
  const productName = props.productName
  const portions = props.portions
  const mouses = props.mouses
  const weight = props.weight
  const buyResponse = props.buyResponse
  const secondDescription = props.secondDescription
  const firstDescription = props.firstDescription
  let productsInStocke = props.productsInStocke

  
  const [clickButton, setClickButton] = useState(false);



  function handleButton() {
    setClickButton(true);   
  }

  function handleCard() {
    return productsInStocke = productsInStocke - 1;
  }

  function handleClick() {
    handleButton();
    handleCard();
  }

  return (
    <section className="card" name={cardName}>
      <div className={`${ (productsInStocke > 0) ?
        (clickButton ? "card__product-border card__product-border-pink" :
        "card__product-border") : "card__product-border card__product-border-grey"
      }`}>
        <div className="card__product">
          <div className={`${(productsInStocke > 0) ? "card__text" : "card__text card__text-grey"}`}>
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
          <img className={`${(productsInStocke !== 0 ) ? "card__image" : "card__image  card__image-off"}`}
            src={require("../../images/cat.png")} alt="Кот"></img>
          <div className={`${(productsInStocke > 0) ?
              (clickButton ? "card__weight card__weight-pink" : "card__weight") :
              "card__weight card__weight-grey"
              }`}>
            <h3 className="card__weight-number">{weight}</h3>
            <p className="card__weight-value">кг</p>
          </div>
        </div>
      </div>
      <div className="card__buy-container"> {(productsInStocke > 0) ?
        ( clickButton ?
          <p className="card__buy-response">{buyResponse}</p> :
          <div className="card__buy">Чего сидишь? Порадуй котэ,
            <button className="card__buy-button" onClick={handleClick} type="button">&nbsp;купи.</button>
          </div> ) : (
            <p className="card__buy-disabled">Печалька, {productName} закончился</p>
          ) 
        }      
      </div>
    </section>
  )
};

export default Card;