import { combineReducers } from 'redux';

interface Action {
  type: string,
  payload: any,
}

const INITIAL_STATE = {};

function MainReducer(state = INITIAL_STATE, action: Action = { type: '', payload: '' }) {
  switch (action.type) {
    case 'MAIN::FETCH_GET_CAMPAIGNS':
      return Object.assign({}, state, action.payload);
    case 'MAIN::FETCH_GET_CAMPAIGNS_SUCCESS':
      return Object.assign({}, state, action.payload);
    case 'MAIN::FETCH_POST_CAMPAIGNS':
      return Object.assign({}, state, action.payload);
    case 'MAIN::FETCH_DELETE_CAMPAIGN':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  mainstore: MainReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;