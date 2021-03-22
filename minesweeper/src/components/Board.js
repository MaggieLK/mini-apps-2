import React, { useState } from 'react';
import store from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from './Column'
import './Board.css';

export function Board() {
  const state = store.getState();
  const diff = useSelector(state => state.mineLocations.diff);

  return (
      <div>
        <div className="board">
          {diff.map(x => {
            return <Column key={x} x={x}/>
          })}
        </div>
      </div>
  )
}
