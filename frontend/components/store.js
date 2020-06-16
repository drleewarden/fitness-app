// store.js
import React, {createContext, useReducer, useState} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
 
  const [exerciseListX, setExerciseListX] = useState({});
  const jump =()=>{
    setExerciseListX({t:'dsf'})
  }
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ACTIVE_WORKOUT':
        const newState = 'ACTIVE_WORKOUT'// do something with the action
      
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
console.log('state',Provider)
