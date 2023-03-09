import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

function decodeJwt(jwt) {
  try {
    const decoded = jwtDecode(jwt);
    return decoded;
  } catch (ex) {
    return null;
  }
}

const initialState = {
  userInfo: {},
  token: null,
  tokenPayload: {},
  verificationEmail: null,
  users: [],
  adminViewAdminProfile: null,
  adminViewUserProfile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      state.tokenPayload = decodeJwt(action.payload);
    },
    setLogout: (state, action) => {
      state.userInfo = null;
      state.token = null;
      state.tokenPayload = null;
      state.adminViewAdminProfile = null;
      state.adminViewUserProfile = null;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    setUpdateUser: (state, action) => {
      const userInfo = action.payload.userInfo;
      state.userInfo = { ...state.userInfo, ...userInfo, token: undefined };
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setVerificationEmail: (state, action) => {
      state.verificationEmail = action.payload;
    },
    removeVerificationEmail: (state, action) => {
      state.verificationEmail = null;
    },
    setAdminViewAdminProfile: (state, action) => {
      state.adminViewAdminProfile = action.payload;
    },
    setAdminViewUserProfile: (state, action) => {
      state.adminViewAdminProfile = action.payload;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setUser,
  setUpdateUser,
  setUsers,
  setVerificationEmail,
  setAdminViewAdminProfile,
  setAdminViewUserProfile,
  removeVerificationEmail,
} = userSlice.actions;

export default userSlice.reducer;
