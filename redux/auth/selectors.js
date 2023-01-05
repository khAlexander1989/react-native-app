export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectUserData = ({ auth: { userId, userName } }) => ({
  userId,
  userName,
});
