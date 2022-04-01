const login = (state = { user: null }, action) => {
  //console.log("REDUCER: action recieved by login reducer: ", action);
  switch (action.type) {
    case "login":
      console.log("In reducer with actions: ", action);
      return { ...state, user: action.payload};
    default:
      return state;
  }
};

export default login;
