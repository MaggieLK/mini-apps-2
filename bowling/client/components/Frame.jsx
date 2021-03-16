import React from 'react';

const Frame = (props) => (
  <div className="game">
    {props.game.map(val => {
      let key = `frame${val}`;
      return <div className="frame" key key={key}>
        <div className="turn1">{val[0]}</div>
        <div className="turn2">{val[1]}</div>
      </div>
    })}
  </div>
)

export default Frame;