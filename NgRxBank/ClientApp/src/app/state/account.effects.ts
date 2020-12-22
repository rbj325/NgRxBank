import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AccountsService } from "../accounts/accounts.service";
import {
  ACCOUNT_ERROR,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  DEPOSIT,
  DEPOSIT_SUCCESS,
  WITHDRAW,
  WITHDRAW_SUCCESS,
} from "./accounts.actions";

@Injectable()
export class AccountEffects {
  deleteAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_ACCOUNT),
      mergeMap((accountId) =>
        this.accountsService.deleteAccount(accountId).pipe(
          map((accounts) => ({
            type: DELETE_ACCOUNT_SUCCESS,
            accountId: accountId,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deposit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DEPOSIT),
      mergeMap((deposit) =>
        this.accountsService.deposit(deposit).pipe(
          map((accounts) => ({
            type: DEPOSIT_SUCCESS,
            deposit: deposit,
          })),
          catchError((error) => of({ type: ACCOUNT_ERROR, error: error }))
        )
      )
    )
  );

  withdraw$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WITHDRAW),
      mergeMap((withdraw) =>
        this.accountsService.withdraw(withdraw).pipe(
          map((accounts) => ({
            type: WITHDRAW_SUCCESS,
            withdraw: withdraw,
          })),
          catchError((error) => of({ type: ACCOUNT_ERROR, error: error }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private accountsService: AccountsService
  ) {}
}
