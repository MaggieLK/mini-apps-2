import './Column.css';
import store from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  //decrementFlag,
  incrementFlags,
  incrementBlanks,
  incrementExploded,
} from '../features/mineFinder';
import explosion from '../explosion.png';
import caution from '../caution.png';


export function Column(props) {
  const state = store.getState();
  const dispatch = useDispatch();
  const flags = useSelector(state => state.mineLocations.flags);
  const mines = useSelector(state => state.mineLocations.mines);
  const blanks = useSelector(state => state.mineLocations.blanks);
  const exploded = useSelector(state => state.mineLocations.exploded);

  let rowArray = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];

  let handleClick = function(e) {
    let Xnum = Number(e.target.dataset['x']);
    let Ynum = Number(e.target.dataset['y']);

    let recurse = (x, y, checked) => {
      let recurseArr = [[x+1, y], [x-1, y], [x+1, y-1], [x+1, y+1], [x-1, y-1], [x-1, y+1], [x, y+1], [x, y-1]]

      if (x > 0 && x <=10 && y > 0 && y <=10){
        let adjacentMines = 0;
        mines.forEach(space => {
          if((space[0] == x + 1 || space[0] == x - 1 || space[0] == x) && (space[1] == y || space[1] == y + 1 || space[1] == y - 1)) {
            adjacentMines += 1;
          }
        });

        let flagged = false;
        flags.forEach(space => {
          if(space[0] == x && space[1] == y) {
            flagged = true
          }
        });
        if (flagged == false) {
          dispatch(incrementBlanks([x,y]))
        }

        if(adjacentMines == 0 && flagged == false) {

          recurseArr.forEach(pair => {
            let blankState = false;
            checked.forEach(space => {
              if(space[0] == pair[0] && space[1] == pair[1]) {
                blankState = true;
              }
            });
            if(blankState == false){
              checked.push([pair[0], pair[1]])
              recurse(pair[0], pair[1], checked)
            }
          })
        }
      }
    }

    if (exploded.length == 0) {
      if (e.type === 'click') {
        let boom = false;
        mines.forEach(space => {
          if(space[0] == Xnum && space[1] == Ynum) {
            e.target.classList.add('mine');
            e.target.classList.remove('space');
            boom = true;
            dispatch(incrementExploded([Xnum,Ynum]))
          }
        })
        if (boom == false) {
          dispatch(incrementBlanks([Xnum,Ynum]))
          recurse(Xnum, Ynum, [])
        }
      } else if (e.type === 'contextmenu') {
        e.preventDefault();
        dispatch(incrementFlags([Xnum,Ynum]))
      }
      if(document.getElementsByClassName("space").length == 0) {
        console.log('You win!')
      }
    }
  }

  return (
    <div className={`column`}>
    {rowArray.map(y => {
      let adjacentMines = 0;
      let xNum = Number(props.x);
      let yNum = Number(y)
      let condition = 'space';
      let output = null;

      mines.forEach(space => {
        if((space[0] == xNum + 1 || space[0] == xNum - 1 || space[0] == xNum) && (space[1] == yNum || space[1] == yNum + 1 || space[1] == yNum - 1)) {
          adjacentMines += 1;
        }
      });

      flags.forEach(space => {
        if(space[0] == xNum && space[1] == yNum) {
          condition = 'flag';
          output = <img className='explosion' src={caution} />
        }
      });
      blanks.forEach(space => {
        if(space[0] == xNum && space[1] == yNum) {
          condition = 'blank';
          output = adjacentMines;
        }
      });


      if(exploded[0] == xNum && exploded[1] == yNum) {
        condition = 'mine';
        output = <img className='explosion' src={explosion} />
      }


      return <div key={`key${props.x}${y}`} id={`${props.x},${y}`} data-x={props.x} data-y={y} className={`${y} ${condition}`} onClick={handleClick} onContextMenu={handleClick} >{output}</div>
    }).reverse()}
    <div className="score"></div>
  </div>
  )

}