/* eslint-disable no-console */
const LOAD_GREETINGS = 'LOAD_GREETINGS';

const URL = 'http://localhost:3000/v1/greetings';

const initialState = {
  greetings: [],
};

export const loadGreetings = (payload) => ({
  type: LOAD_GREETINGS,
  payload,
});

export const fetchGreetings = () => async (dispatch) => {
  const response = await fetch(URL);
  const greetings = await response.json();
  dispatch(loadGreetings(greetings));
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GREETINGS:
      console.log(action.payload);
      return action.payload[Math.floor(Math.random() * 8)];
    default:
      return state;
  }
};

export default greetingsReducer;
