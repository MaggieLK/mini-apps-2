//import $ from 'jquery';
import React from 'react';
import Selection from './Selection.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class Bowling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: [1,2,3,4,5,6,7,8,9,10],
      games:[[[2,3],[3,6]], [[5,4], [2,7]]],
      currentGame: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.innerHTML)
  }

  render () {
    return (
      <div>
        <h1>Bowling Score Tracker</h1>
        <Selection ten={this.state.ten} clicker={this.handleClick}/>
        <ScoreBoard ten={this.state.ten} games={this.state.games} currentGame={this.state.currentGame}/>
      </div>
    )
  }
}

export default Bowling;

