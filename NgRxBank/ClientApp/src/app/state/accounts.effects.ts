import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AccountsService } from "../accounts/accounts.service";
import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_SUCCESS,
  LOAD_ACCOUNTS,
  LOAD_ACCOUNTS_SUCCESS,
} from "./accounts.actions";

@Injectable()
export class AccountsEffects {
  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ACCOUNTS),
      mergeMap(() =>
        this.accountsService.getAccounts().pipe(
          map((accounts) => ({
            type: LOAD_ACCOUNTS_SUCCESS,
            accounts: accounts,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_ACCOUNT),
      mergeMap((account) =>
        this.accountsService.addAccount(account).pipe(
          map((accounts) => ({
            type: ADD_ACCOUNT_SUCCESS,
            account: account,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private accountsService: AccountsService
  ) {}
}
