import { createStore } from 'redux';
import * as actions from './actionCreators';

const InitialState = {
  counter: 0,
};

/**
 * Translation Redux reducer
 * @param  {Object} inputState  App state
 * @param  {Object} action      Flux action
 * @return {Object}             Updated app state
 */
export function reducer(state = InitialState, action = {}) {
  switch (action.type) {
    case actions.INCREMENT: {
      return { ...state, counter: (state.counter + 1) };
    }
    default: return state;
  }
}

export default function createAppStore(initialState) {
  return createStore(reducer, initialState);
}
