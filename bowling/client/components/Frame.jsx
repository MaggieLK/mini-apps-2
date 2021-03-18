import React from 'react';

const Frame = (props) => {
  let total = props.game.map(val => val[2]).reduce((total, num) => {
    return total + num;
  })
  return <div className="game">
    {props.game.map((val, i) => {
      let key = `frame${i}${val}`;
      let turn1 = val[0] == 10 ? 'X' : val[0];
      let turn2 = (val[0] + val[1] == 10 && val[0] < 10) ? '/' : val[1];
      return <div className="frame" key key={key}>
        <div className="turn1">{turn1}</div>
        <div className="turn2">{turn2}</div>
        <div className="points">{val[2]}</div>
      </div>
    })}
    <div className="finalScore">{total}</div>
  </div>
}

export default Frame;