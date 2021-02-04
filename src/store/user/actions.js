import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_LOADING,
  USER_LOGIN_WITH_EMAIL_AND_PASSWORD,
  USER_LOGIN_WITH_GOOGLE,
  USER_SIGN_UP_FAILURE,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  USER_SIGN_UP_WITH_GOOGLE,
} from "./types";

export const userSignUpSuccess = (user) => ({
  type: USER_SIGN_UP_SUCCESS,
  payload: { user },
});

export const userSignUpError = () => ({ type: USER_SIGN_UP_FAILURE });

export const userSignUpLoading = () => ({
  type: USER_SIGN_UP_LOADING,
  payload: { loading: true },
});

export const userSignUpWithEmailAndPassword = (email, password) => ({
  type: USER_SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  payload: { email, password }
});


export const UserLogInSuccess = (user) => ({
  type: USER_SIGN_UP_SUCCESS,
  payload: { user }
})

export const userLogInError = () => ({
  type: USER_LOGIN_FAILURE
})

export const userLogInLoading = (loading) => ({
  type: USER_LOGIN_LOADING,
  payload: { loading }
})

export const userLogInWithEmailAndPassword = (email, password) => ({
  type: USER_LOGIN_WITH_EMAIL_AND_PASSWORD,
  payload: { email, password }
}) 

export const userLogInWithGoogle = () => ({
  type: USER_LOGIN_WITH_GOOGLE
});