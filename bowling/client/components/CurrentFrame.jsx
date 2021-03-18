import React from 'react';
import Frame from './Frame.jsx';

const CurrentFrame = (props) => {
  let total = 0;
  if (props.game.length > 0) {
    total = props.game.map(val => {
    if(val[2]) {
      return val[2];
    } else {
      return 0;
    }
  }).reduce((total, num) => {
    return total + num
  })
}
  return <div className="game">
    {props.game.map((val, index) => {
      let key = `frame${index}`;
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

export default CurrentFrame;