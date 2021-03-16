import React from 'react';

const Selection = (props) => (
  <div >
    {props.ten.map(val => {
      return <button onClick={props.clicker} className="num" key={val}>{val}</button>
    })}
  </div>
)

export default Selection;