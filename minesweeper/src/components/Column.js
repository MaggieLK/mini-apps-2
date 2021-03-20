import './Column.css';
import store from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  //decrementFlag,
  incrementFlags,
  incrementBlanks,
  incrementChecked,
} from '../features/mineFinder';
//import $ from 'jquery';

export function Column(props) {
  const state = store.getState();
  const dispatch = useDispatch();
  const flags = useSelector(state => state.mineLocations.flags);
  const mines = useSelector(state => state.mineLocations.mines);
  const blanks = useSelector(state => state.mineLocations.blanks);
  //const checked = useSelector(state => state.mineLocations.checked);

  let rowArray = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];

  let handleClick = function(e) {
    let Xnum = Number(e.target.dataset['x']);
    let Ynum = Number(e.target.dataset['y']);
    //let adjacentMines = 0;

    let recurse = (x, y, checked) => {
      let recurseArr = [[x+1, y], [x-1, y], [x+1, y-1], [x+1, y+1], [x-1, y-1], [x-1, y+1], [x, y+1], [x, y-1]]

      if (x > 0 && x <=10 && y > 0 && y <=10){
        console.log(x, y)
        // let square = document.getElementById(`${x}, ${y}`);
        let adjacentMines = 0;
        mines.forEach(space => {
          if((space[0] == x + 1 || space[0] == x - 1 || space[0] == x) && (space[1] == y || space[1] == y + 1 || space[1] == y - 1)) {
            adjacentMines += 1;
          }
        });
        // blanks.forEach(space => {
        //   if(space[0] == x && space[1] == y) {
        //     blankState = true;
        //   }
        // });
        console.log(adjacentMines)

        if(adjacentMines == 0) {
          dispatch(incrementBlanks([x,y]))
          recurseArr.forEach(pair => {
            let blankState = false;
            checked.forEach(space => {
              if(space[0] == pair[0] && space[1] == pair[1]) {
                blankState = true;
              }
            });
            console.log(blankState, pair)
            if(blankState == false){

              checked.push([pair[0], pair[1]])
              recurse(pair[0], pair[1], checked)
            }
          })
        }
      }
    }


    if (e.type === 'click') {
      let exploded = false;
      mines.forEach(space => {
        if(space[0] == Xnum && space[1] == Ynum) {
          e.target.classList.add('mine');
          e.target.classList.remove('space');
          exploded = true
        }
      })
      if (exploded == false) {
        recurse(Xnum, Ynum, [])
      }
    } else if (e.type === 'contextmenu') {
      e.preventDefault();
      //e.target.classList.add('flag');
      //e.target.classList.remove('space');
      dispatch(incrementFlags([Xnum,Ynum]))
    }

    if(document.getElementsByClassName("space").length == 0) {
      console.log('game over')
    }


  }






  return (
    <div className={`column`}>
    {rowArray.map(y => {
      let condition = 'space';
      //console.log(flags)
      flags.forEach(space => {
        if(space[0] == props.x && space[1] == y) {
          condition = 'flag';
        }
      });
      blanks.forEach(space => {
        if(space[0] == props.x && space[1] == y) {
          condition = 'blank';
        }
      });
      let adjacentMines = null;
      if(condition == "blank") {
        adjacentMines = 0;
        mines.forEach(space => {
          if((space[0] == props.x + 1 || space[0] == props.x - 1 || space[0] == props.x) && (space[1] == y || space[1] == y + 1 || space[1] == y - 1)) {
            //console.log(props.x,y)
            adjacentMines += 1;
          }
        })
      }

      return <div key={`key${props.x}${y}`} id={`${props.x},${y}`} data-x={props.x} data-y={y} className={`${y} ${condition}`} onClick={handleClick} onContextMenu={handleClick} >{adjacentMines}</div>
    }).reverse()}
    <div className="score"></div>
  </div>
  )

}