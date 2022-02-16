const login = (state = {}, action) => {
  console.log("REDUCER: action recieved by login reducer: ", action);
  switch (action.type) {
    case "login":
      return { ...state, login: { user: action.payload.username } };
    default:
      return state;
  }
};

export default login;
