import { Account } from "../accounts/account.model";

export interface AppState {
  accounts: Account[];
  selectedAccount: Account;
}
