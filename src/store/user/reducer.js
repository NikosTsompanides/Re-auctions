import createReducer from '../../utils/helpers/createReducer';

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_SIGN_UP_FAILURE,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,
} from "./types";

const initialState = () => ({
  user: null,
  redirect: false,
  loading: false,
  error: false,
});

// inspired by vuex mutations 
const mutations = (state) => ({
  [USER_SIGN_UP_SUCCESS]: ({ user }) => {
    state.user = user;
    state.redirect = "/"
  },
  [USER_SIGN_UP_LOADING]: ({ loading }) => (state.loading = loading),
  [USER_SIGN_UP_FAILURE]: () => (state.error = true),

  // Log In
  [USER_LOGIN_SUCCESS]: ({ user }) => (state.user = user),
  [USER_LOGIN_LOADING]: ({ loading }) => (state.loading = loading),
  [USER_LOGIN_FAILURE]: () => (state.error = true),
})

export const userReducer = createReducer(initialState, mutations)

