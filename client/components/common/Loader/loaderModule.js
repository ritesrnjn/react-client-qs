// ------------------------------------
// Constants
// ------------------------------------
export const LOADER_START = 'LOADER_START';
export const LOADER_STOP = 'LOADER_STOP';

// ------------------------------------
// Actions
// ------------------------------------
export function start(value = 1) {
  return {
    type: LOADER_START,
    payload: value,
  };
}

export function stop(value = 1) {
  return {
    type: LOADER_STOP,
    payload: value,
  };
}

export const actions = {
  start,
  stop,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOADER_START]: (state, action) => state + action.payload,
  [LOADER_STOP]: (state, action) => state - action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
export default function loaderReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
