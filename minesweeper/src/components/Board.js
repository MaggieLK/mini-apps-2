import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column } from './Column'
import './Board.css';

// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

export function Board() {
  //const count = useSelector(selectCount);
  const dispatch = useDispatch();
  //const [incrementAmount, setIncrementAmount] = useState('2');
  let columnArray = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];
  return (
      <div>
        <div className="board">
          {columnArray.map(x => {
            return <Column x={x}/>
          })}
          {/* <Column x="1" />
          <Column x="2" />
          <Column x="3" />
          <Column x="4" />
          <Column x="5" />
          <Column x="6" />
          <Column x="7" />
          <Column x="8" />
          <Column x="9" />
          <Column x="10" /> */}
        </div>
      </div>

  )

  // return (
  //   <div>
  //     <div className={styles.row}>
  //       <button
  //         className={styles.button}
  //         aria-label="Increment value"
  //         onClick={() => dispatch(increment())}
  //       >
  //         +
  //       </button>
  //       <span className={styles.value}>{count}</span>
  //       <button
  //         className={styles.button}
  //         aria-label="Decrement value"
  //         onClick={() => dispatch(decrement())}
  //       >
  //         -
  //       </button>
  //     </div>
  //     <div className={styles.row}>
  //       <input
  //         className={styles.textbox}
  //         aria-label="Set increment amount"
  //         value={incrementAmount}
  //         onChange={e => setIncrementAmount(e.target.value)}
  //       />
  //       <button
  //         className={styles.button}
  //         onClick={() =>
  //           dispatch(incrementByAmount(Number(incrementAmount) || 0))
  //         }
  //       >
  //         Add Amount
  //       </button>
  //       <button
  //         className={styles.asyncButton}
  //         onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
  //       >
  //         Add Async
  //       </button>
  //     </div>
  //   </div>
  // );
}
