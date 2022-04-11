export const initialState = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: null,
      };
    default:
      return state;
  }
};

export default reducer;
