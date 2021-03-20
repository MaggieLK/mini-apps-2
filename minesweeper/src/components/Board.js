import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from './Column'
import './Board.css';

export function Board() {
  const dispatch = useDispatch();
  let columnArray = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];
  return (
      <div>
        <div className="board">
          {columnArray.map(x => {
            return <Column key={x} x={x}/>
          })}
        </div>
      </div>
  )
}
