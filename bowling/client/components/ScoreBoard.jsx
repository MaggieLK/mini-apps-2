import React from 'react';
import Frame from './Frame.jsx';
import CurrentFrame from './CurrentFrame.jsx';

const ScoreBoard = (props) => {
  return <div className="score">
    <CurrentFrame ten={props.ten} game={props.currentGame}/>
    {props.games.map((game, i) => {
      return <Frame key={`frame${i}${game}`} game={game} />
    })}
  </div>
}

export default ScoreBoard;