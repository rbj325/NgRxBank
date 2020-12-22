import { createReducer, on } from "@ngrx/store";
import {
  accountError,
} from "./accounts.actions";
export const initialState: string = "";

export const errorReducer = createReducer(
  initialState,
  on(accountError, (state, { error }) => {
    alert(error.error);
    return error;
  })
);
