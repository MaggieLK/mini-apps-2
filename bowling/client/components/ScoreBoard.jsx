import React from 'react';
import Frame from './Frame.jsx';
import CurrentFrame from './CurrentFrame.jsx';

const ScoreBoard = (props) => (
  <div className="score">
    {props.games.map(game => {
      return <Frame key={game} game={game} />
    })}
    <CurrentFrame game={props.currentGame}/>
  </div>
)

export default ScoreBoard;