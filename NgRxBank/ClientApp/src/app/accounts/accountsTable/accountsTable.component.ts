import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountComponent } from '../account/account.component';

@Component({
  selector: "app-accounts-table",
  templateUrl: "./accountsTable.component.html",
  styleUrls: ['./accountsTable.component.css']
})
export class AccountsTableComponent {
  @Input() accounts: Array<Account>;

  viewAccount(account) {
    const modalRef = this.modalService.open(AccountComponent);
    modalRef.componentInstance.account = account;
    modalRef.componentInstance.modalRef = modalRef;
  }

  constructor(private modalService: NgbModal){

  }
  ngOnInit() {
    console.log(this.accounts);
  }
}
