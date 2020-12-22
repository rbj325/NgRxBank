using NgRxBank.Models;
using System;
using System.Collections.Generic;

namespace NgRxBank.Gateways
{
    public interface IUserAccountGateway
    {
        void AddAccount(UserAccount account);
        void DeleteAccount(Guid accountId, string userId);
        IEnumerable<UserAccount> GetAllAccounts(string userId);
        string Deposit(TransactionDTO deposit);
        string ValidateDeposit(TransactionDTO deposit);
        string Withdraw(TransactionDTO withdraw);
        string ValidateWithdraw(TransactionDTO deposit, UserAccount account);
    }
}
