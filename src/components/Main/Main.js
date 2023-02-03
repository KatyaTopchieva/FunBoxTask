import React from "react";
import './Main.css';
import CardFuaGra from "../CardFuaGra/CardFuaGra";
import CardFish from "../CardFish/CardFish";
import CardChicken from "../CardChicken/CardChicken";

function Main() {
  
    return (
        <main className="main">
          <p className="main__text">Ты сегодня покормил кота?</p>
          <div className="main__cards">
            <CardFuaGra />
            <CardFish />
            <CardChicken />
          </div>
        </main>
    )
}

export default Main;