export const user_login = (username) => {
  console.log("ACTION: user logged in", username);
  return {
    type: "login",
    payload: {
      username,
    },
  };
};
