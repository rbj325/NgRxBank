import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Account } from "../accounts/account.model";

export const selectAccounts = createSelector(
  (state: AppState) => state.accounts,
  (accounts: Array<Account>) => accounts
);

export const selectAccount = createSelector(
  (state: AppState) => state.selectedAccount,
  (account: Account) => account
);
