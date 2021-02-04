import { ofType } from "redux-observable";
import { from } from "rxjs";
import { mergeMap, map, catchError, startWith } from "rxjs/operators";
import { FirebaseService } from "../../services/Firebase";
import {
  userLogInError,
  userLogInLoading,
  UserLogInSuccess,
  userSignUpError,
  userSignUpLoading,
  userSignUpSuccess,
} from "./actions";
import {
  USER_LOGIN_WITH_EMAIL_AND_PASSWORD,
  USER_SIGN_UP_WITH_EMAIL_AND_PASSWORD,
  USER_LOGIN_WITH_GOOGLE,
} from "./types";

const signUpWithEmailAndPasswordEpic = (action$) =>
  action$.pipe(
    ofType(USER_SIGN_UP_WITH_EMAIL_AND_PASSWORD),
    mergeMap((action) =>
      from(
        FirebaseService().createUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
      ).pipe(
        map((result) => ({
          email: result.user.email,
          provider: result.additionalUserInfo.providerId,
        })),
        map((user) => userSignUpSuccess(user)),
        catchError(() => userSignUpError()),
        startWith(userSignUpLoading(true))
      )
    )
  );

const logInWithGoogle = (action$) =>
  action$.pipe(
    ofType(USER_LOGIN_WITH_GOOGLE),
    mergeMap((action) =>
      from(FirebaseService().createUserWithGoogle()).pipe(
        map((result) => userSignUpSuccess(result.user)),
        catchError(() => userSignUpError()),
        startWith(userSignUpLoading(true))
      )
    )
  );
const logInWithEmailAndPasswordEpic = (action$) =>
  action$.pipe(
    ofType(USER_LOGIN_WITH_EMAIL_AND_PASSWORD),
    mergeMap((action) =>
      from(
        FirebaseService().logInUserWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
      ).pipe(
        map((result) => UserLogInSuccess(result)),
        catchError(() => userLogInError()),
        startWith(userLogInLoading(true))
      )
    )
  );

export const userEpics = [
  signUpWithEmailAndPasswordEpic,
  logInWithEmailAndPasswordEpic,
  logInWithGoogle,
];
