import React from 'react';
import Selection from './Selection.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class Bowling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: [1,2,3,4,5,6,7,8,9,10],
      games:[],
      currentGame: {},
      roll1: true,
      currentFrame: 1,
      strike: false,
      spare: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let pins = Number(e.target.innerHTML)
    let score = this.state.currentGame[`frame${this.state.currentFrame}`] || [];
    let frame = this.state.currentFrame;
    let nextFrame = frame + 1;
    let previousFrame = frame - 1;
    let temp = this.state.currentGame;
    score.push(pins);
    let sum = 0;

    if (pins == 10 && this.state.roll1 == true) {
      score = [10, null, 30];
      this.setState({
        currentFrame: nextFrame
      })
    } else {


    if(this.state.roll1 == true) {
      this.setState({
        roll1: false,
      })
    } else {
      this.setState({
        roll1: true,
        currentFrame: nextFrame
      })
      sum = score[0] + score [1];
      if (sum == 10) {
        sum += score[0]
      }
      score.push(sum);
    }
  }
    temp[`frame${frame}`] = score;
    this.setState({
      currentGame: temp
    })

    if(frame == 10  && (this.state.roll1 == false || pins == 10)) {
      let allGames = this.state.games;
      allGames.unshift(Object.values(this.state.currentGame));
      this.setState({
        games: allGames,
        currentGame: {},
        roll1: true,
        currentFrame: 1
      })
    }
  }

  render () {
    return (
      <div>
        <h1 className = "title">Bowling Score Tracker</h1>
        <Selection ten={this.state.ten} clicker={this.handleClick}/>
        <ScoreBoard ten={this.state.ten} games={this.state.games} currentGame={Object.values(this.state.currentGame)}/>
      </div>
    )
  }
}

export default Bowling;

