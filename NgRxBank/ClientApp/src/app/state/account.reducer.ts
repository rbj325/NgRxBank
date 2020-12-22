import { createReducer, on } from "@ngrx/store";
import {
  accountError,
  depositSuccess, selectedAccount, withdrawSuccess,
} from "./accounts.actions";
import { Account } from "../accounts/account.model";
export const initialState: Account = { id: "", balance: 0.0 };

export const accountReducer = createReducer(
  initialState,
  on(depositSuccess, (state, { deposit }) => {
    return state.balance + deposit.amount;
  }),
  on(selectedAccount, (state, {account}) => {
    return account;
  }),
  on(withdrawSuccess, (state, { withdraw }) => {
    return state.balance - withdraw.amount;
  }),
);
