import { createAction, props } from "@ngrx/store";

export const LOAD_ACCOUNTS = "[Accounts] Load Accounts";
export const LOAD_ACCOUNTS_FAIL = "[Accounts] Load Accounts Fail";
export const LOAD_ACCOUNTS_SUCCESS = "[Accounts] Load Accounts Success";
export const ADD_ACCOUNT = "[Accounts] Add Account";
export const ADD_ACCOUNT_SUCCESS = "[Accounts] Add Account Success";

export const DELETE_ACCOUNT = "[Accounts] Delete Account";
export const DELETE_ACCOUNT_SUCCESS = "[Accounts] Delete Account Success";
export const DEPOSIT = "[Accounts] Deposit Account";
export const DEPOSIT_SUCCESS = "[Accounts] Deposit Success";
export const WITHDRAW = "[Accounts] Withdraw";
export const WITHDRAW_SUCCESS = "[Accounts] Withdraw Success";
export const SELECTED_ACCOUNT = "[Accounts] Selected Account";
export const ACCOUNT_ERROR = "[Accounts] Account Error";

export const loadAccounts = createAction(LOAD_ACCOUNTS);
export const loadFail = createAction(LOAD_ACCOUNTS_FAIL);
export const loadSuccess = createAction(
  LOAD_ACCOUNTS_SUCCESS,
  props<{ accounts }>()
);
export const addAccount = createAction(ADD_ACCOUNT, props<{ account }>());
export const addAccountSuccess = createAction(ADD_ACCOUNT_SUCCESS);

export const deleteAccount = createAction(
  DELETE_ACCOUNT,
  props<{ accountId }>()
);
export const deleteAccountSuccess = createAction(
  DELETE_ACCOUNT_SUCCESS,
  props<{ accountId }>()
);

export const deposit = createAction(
  DEPOSIT,
  props<{ account, amount }>()
);
export const depositSuccess = createAction(
  DEPOSIT_SUCCESS,
  props<{ deposit }>()
);

export const withdraw = createAction(
  WITHDRAW,
  props<{ account, amount }>()
);

export const withdrawSuccess = createAction(
  WITHDRAW_SUCCESS,
  props<{ withdraw }>()
);

export const accountError = createAction(
  ACCOUNT_ERROR,
  props<{ error }>()
);

export const selectedAccount = createAction(
  SELECTED_ACCOUNT,
  props<{ account }>()
);
