const LOAD_GREETINGS = 'LOAD_GREETINGS';

const URL = 'http://localhost:3000/v1/greetings';

const initialState = {
  greetings: [{
    id: 1,
    name: 'Hello',
  }],
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
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
