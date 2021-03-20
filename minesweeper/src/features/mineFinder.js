import { createSlice } from '@reduxjs/toolkit';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let mines = [];

// {
//   mines: [],
//   flags: [],
//   blank:[],
//   exploded: false
// };

while(mines.length < 10) {
  let mine = [getRandomInt(1, 11), getRandomInt(1, 11)];
  let repeat = false;
  mines.forEach(space => {
    //console.log()
    if(space[0] == mine[0] && space[1] !== mine[1]){
      repeat = true;
    }
  })
  if (repeat == false)  mines.push(mine)
}
console.log(mines)

export const mineLocations = createSlice({
  name: 'mines',
  initialState: {
    mines: mines,
    flags: [],
    blanks: [],
    exploded: [],
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   //state.value += 1;

    // },
    incrementExploded: (state, action) => {
      state.exploded = action.payload
    },
    incrementBlanks: (state, action) => {
      const newState = [...state.blanks];
      newState.push(action.payload);
      state.blanks = newState;
    },
    incrementFlags: (state, action) => {
      const newState = [...state.flags];
      newState.push(action.payload);
      state.flags = newState;
    },
  }
});

export const { incrementFlags, incrementBlanks, incrementExploded } = mineLocations.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     //dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const getMines = state => state.mines.value;

export const mineReducer = mineLocations.reducer;



// export const flagLocations = createSlice({
//   name: 'flags',
//   initialState: {
//     value: [],
//   },
//   reducers: {
//     // increment: state => {
//     //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
//     //   // doesn't actually mutate the state because it uses the Immer library,
//     //   // which detects changes to a "draft state" and produces a brand new
//     //   // immutable state based off those changes
//     //   //state.value += 1;

//     // },
//     decrementFlag: state => {
//       //state.value -= 1;
//     },
//     incrementFlag: (state, action) => {
//       console.log(action.payload)
//       console.log(state.value)
//       console.log(state.flags)
//       console.log(state)
//       const newState = [...state.value];
//       console.log(newState)

//       newState.push(action.payload);
//       //state.value = newState;
//       //this.setState(newState)
//       return newState;
//     },
//   },
// });
// export const { incrementFlag, decrementFlag} = flagLocations.actions;
// export const flagReducer = flagLocations.reducer;