import { createReducer, on } from "@ngrx/store";
import {
  loadSuccess,
  addAccount,
} from "./accounts.actions";
import { Account } from "../accounts/account.model";
export const initialState: ReadonlyArray<Account> = [];

export const accountsReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { accounts }) =>{
    return [...accounts];
  }),
  on(addAccount, (state, {account}) => {
    return [...state, account];
  }),
);
