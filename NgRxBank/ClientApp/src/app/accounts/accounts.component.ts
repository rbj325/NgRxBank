import { Component } from "@angular/core";
import { selectAccounts } from "../state/accounts.selector";
import { Store, select } from "@ngrx/store";
import {
  addAccount,
  loadAccounts,
} from "../state/accounts.actions";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
})
export class AccountsComponent {
  accounts$ = this.store.pipe(select(selectAccounts));
  validationError = "";

  onAdd() {
    this.store.dispatch(
      addAccount({ account: { id: uuidv4(), balance: 100 } })
    );
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadAccounts());
  }
}
