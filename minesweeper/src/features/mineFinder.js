import { createSlice } from '@reduxjs/toolkit';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let mines = [];
while(mines.length < 10) {
  let mine = [getRandomInt(1, 11), getRandomInt(1, 11)];
  let repeat = false;
  mines.forEach(space => {
    if(space[0] == mine[0] && space[1] !== mine[1]){
      repeat = true;
    }
  })
  if (repeat == false)  mines.push(mine)
}

export const mineLocations = createSlice({
  name: 'mines',
  initialState: {
    mines: mines,
    flags: [],
    blanks: [],
    exploded: [],
  },
  reducers: {
    incrementExploded: (state, action) => {
      state.exploded = action.payload
    },
    incrementBlanks: (state, action) => {
      const newState = [...state.blanks];
      let repeat = false;
      newState.forEach((blank, i) => {
        if (blank[0] == action.payload[0] && blank[1] == action.payload[1]){
          repeat = true;
        }
      })
      if(repeat == false){
        newState.push(action.payload);
      }
      state.blanks = newState;
    },
    incrementFlags: (state, action) => {
      const newState = [...state.flags];
      let repeat = false;
      newState.forEach((flag, i) => {
        if (flag[0] == action.payload[0] && flag[1] == action.payload[1]){
          repeat = true;
        }
      })
      if(repeat == false){
        newState.push(action.payload);
      }
      state.flags = newState;
    },
    decrementFlags: (state, action) => {
      let newState = [...state.flags];
      let index = null;
      newState.forEach((flag, i) => {
        if (flag[0] == action.payload[0] && flag[1] == action.payload[1]){
          index = i;
        }
      })
      newState = newState.slice(0, index).concat(newState.slice(index+1));
      state.flags = newState;
    },
  }
});

export const { incrementFlags, decrementFlags, incrementBlanks, incrementExploded } = mineLocations.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     //dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const mineReducer = mineLocations.reducer;
