import './Column.css';

export function Column(props) {
  let rowArray = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];
  return (
    <div className={`column`}>
    {rowArray.map(y => {
      return <div key={`key${props.x}${y}`} data-x={props.x} data-y={y} className={`space ${y}`}>{`${props.x},${y}`}</div>
    }).reverse()}
  </div>
  )

}