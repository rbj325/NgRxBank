import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Inject } from "@angular/core";
import { map } from "rxjs/operators";
import { Account } from "./account.model";

@Injectable({ providedIn: "root" })
export class AccountsService {
  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {}
  getAccounts(): Observable<Array<Account>> {
    return this.http.get<Account[]>(this.baseUrl + "useraccounts").pipe(
      map((accounts) => {
        console.log(accounts);
        return accounts;
      })
    );
  }

  addAccount(action: any): Observable<void> {
    return this.http.post<void>(this.baseUrl + "useraccounts", action.account);
  }

  deleteAccount(action: any): Observable<void> {
    return this.http.delete<void>(
      this.baseUrl + "useraccounts?accountId=" + action.accountId
    );
  }
  deposit(action: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + "deposit", {
      accountId: action.account.id,
      amount: action.amount,
    });
  }
  withdraw(action: any): Observable<string> {
    return this.http.post<string>(this.baseUrl + "withdraw", {
      accountId: action.account.id,
      amount: action.amount,
    });
  }
}
