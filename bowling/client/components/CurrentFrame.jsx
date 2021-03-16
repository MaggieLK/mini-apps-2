import React from 'react';
import Frame from './Frame.jsx';

const CurrentFrame = (props) => (
  <div className="game">
    {props.game.map(val => {
      let key = `frame${val}`;
      return <div className="frame" key key={key}>
        <div className="turn1"></div>
        <div className="turn2"></div>
      </div>
    })}
  </div>
)

export default CurrentFrame;