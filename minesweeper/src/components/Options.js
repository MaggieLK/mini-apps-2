import React, { useState } from 'react';
import store from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementExploded,
  setMines,
  setDiff,
  setBlanks,
  setFlags,
} from '../features/sliceCreator';
import './Options.css';

export function Options() {

  const dispatch = useDispatch();
  let diffSelector = (e) => {
    let level = null;
    let length = null;
    if (e.target.id === 'easy') {
      level = 10;
      length = 10;
    } else if (e.target.id === 'medium') {
      level = 40;
      length = 15;
    } else if (e.target.id === 'hard') {
      level = 100;
      length = 20;
    }
    let diff = [];
    for(let i = 1; i <= length; i++) {
      diff.push(i)
    }
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    let mines = [];
    while(mines.length < level) {
      let mine = [getRandomInt(1, length), getRandomInt(1, length)];
      let repeat = false;
      mines.forEach(space => {
        if(space[0] == mine[0] && space[1] == mine[1]){
          repeat = true;
        }
      })
      if (repeat == false)  mines.push(mine)
    }

    dispatch(setBlanks([]));
    dispatch(setFlags([]));
    dispatch(incrementExploded([]));
    dispatch(setMines(mines));
    dispatch(setDiff(diff));

  }
  return (
      <div className="options">
        <div className="newGame">New Game: </div>
        <div className="difficulty">
        <button className="level" id="easy" onClick={diffSelector}>Easy</button>
        <button className="level" id="medium" onClick={diffSelector}>Medium</button>
        <button className="level" id="hard" onClick={diffSelector}>Hard</button>
        </div>
      </div>
  )
}
