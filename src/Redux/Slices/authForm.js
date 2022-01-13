import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      id: 1,
      FirstName: "Arslan",
      LastName: "Aslam",
      Email: "email@gmail.com",
      Password: 12334,
    },
  ],
};
const LoginAuthSlice = createSlice({
  name: "LoginAuth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const newUser = {
        id: new Date().getFullYear(),
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        Email: action.payload.Email,
        Password: action.payload.Password,
      };
      state.users.push(newUser);
    },
  },
});
export const { userLogin } = LoginAuthSlice.actions;
export default LoginAuthSlice.reducer;
