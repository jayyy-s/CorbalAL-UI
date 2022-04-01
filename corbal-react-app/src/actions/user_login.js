export const user_login = (userInfo) => {
  console.log("ACTION: user logged in", userInfo);
  return {
    type: "login",
    payload: userInfo,
  };
};
