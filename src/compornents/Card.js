import React from 'react'
import "./Card.css";

function Card({ pokemon }) {
  return (
    <div className="card">
        <div className="cardImg">
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <h3 className='cardName'>{pokemon.name}</h3>
        <diz className="cardTypes">
            <div className='typenNme'>タイプ</div>
            {pokemon.types.map((type) => {
                return <div key={type.type.name}>
                    <span className="typeName">{type.type.name}</span>
                </div>
            })}
        </diz>
        <div className='cardInfo'></div>
            <div className='cardData'>
                <p className='title'>重さ:{pokemon.weight}</p>
            </div>
            <div className='cardData'>
                <p className='title'>高さ:{pokemon.height}</p>
            </div>
            <div className='cardData'>
                <p className='title'>アビリティ:{pokemon.abilities[0].ability.name}</p>
            </div>
    </div>
  );
};

export default Card;