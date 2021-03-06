/* @flow strict-local */
import type {
  FetchingState,
  Action,
  MessageFetchStartAction,
  MessageFetchCompleteAction,
} from '../types';
import {
  DEAD_QUEUE,
  LOGOUT,
  LOGIN_SUCCESS,
  ACCOUNT_SWITCH,
  DO_NARROW,
  MESSAGE_FETCH_START,
  MESSAGE_FETCH_COMPLETE,
} from '../actionConstants';
import { NULL_FETCHING, NULL_OBJECT } from '../nullObjects';

const initialState: FetchingState = NULL_OBJECT;

const messageFetchStart = (
  state: FetchingState,
  action: MessageFetchStartAction,
): FetchingState => {
  const key = JSON.stringify(action.narrow);
  const currentValue = state[key] || NULL_FETCHING;

  return {
    ...state,
    [key]: {
      older: currentValue.older || action.numBefore > 0,
      newer: currentValue.newer || action.numAfter > 0,
    },
  };
};

const messageFetchComplete = (
  state: FetchingState,
  action: MessageFetchCompleteAction,
): FetchingState => {
  const key = JSON.stringify(action.narrow);
  const currentValue = state[key] || NULL_FETCHING;

  return {
    ...state,
    [key]: {
      older: currentValue.older && !(action.numBefore > 0),
      newer: currentValue.newer && !(action.numAfter > 0),
    },
  };
};

export default (state: FetchingState = initialState, action: Action): FetchingState => {
  switch (action.type) {
    case DEAD_QUEUE:
    case LOGOUT:
    case LOGIN_SUCCESS:
    case DO_NARROW:
    case ACCOUNT_SWITCH:
      return initialState;

    case MESSAGE_FETCH_START:
      return messageFetchStart(state, action);

    case MESSAGE_FETCH_COMPLETE:
      return messageFetchComplete(state, action);

    default:
      return state;
  }
};
