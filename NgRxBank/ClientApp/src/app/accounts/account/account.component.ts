import { Component, Input } from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  deleteAccount,
  deposit,
  loadAccounts,
  selectedAccount,
  withdraw
} from "../../state/accounts.actions";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from "@angular/forms";
import { selectAccount } from "src/app/state/accounts.selector";
@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
})
export class AccountComponent {

  @Input() account;
  @Input() modalRef;
  depositAmount = new FormControl(0.0);
  withdrawAmount = new FormControl(0.0);


  onDeposit() {
    this.store.dispatch(deposit({amount: this.depositAmount.value, account: this.account}));
    this.modalRef.close();
    this.store.dispatch(loadAccounts());
  }

  onWithdraw() {
    this.store.dispatch(withdraw({amount: this.withdrawAmount.value, account: this.account}));
    this.modalRef.close();
    this.store.dispatch(loadAccounts());
  }

  onDelete() {
    this.store.dispatch(deleteAccount({ accountId: this.account.id }));
    this.modalRef.close();
    this.store.dispatch(loadAccounts());
  }

  constructor(private store: Store, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.store.pipe(select(selectAccount));
    this.store.dispatch(selectedAccount({ account: this.account}));
  }
}
