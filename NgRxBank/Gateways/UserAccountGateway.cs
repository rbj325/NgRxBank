using NgRxBank.Models;
using System;
using System.Collections.Generic;

namespace NgRxBank.Gateways
{
    public abstract class UserAccountGateway : IUserAccountGateway
    {
        public abstract void AddAccount(UserAccount account);
        public abstract void DeleteAccount(Guid accountId, string userId);
        public abstract IEnumerable<UserAccount> GetAllAccounts(string userId);
        public abstract string Deposit(TransactionDTO deposit);
        public string ValidateDeposit(TransactionDTO deposit)
        {
            // Cannot deposit more than 10,000
            if (deposit.Amount > 10000)
            {
                return "Cannot deposit more than $10,000";
            }
            return "";
        }
        public abstract string Withdraw(TransactionDTO withdraw);
        public string ValidateWithdraw(TransactionDTO withdraw, UserAccount account)
        {
            var balanceAfterWithdraw = account.Balance - withdraw.Amount;
            var percentageOfAccount = (withdraw.Amount / account.Balance);

            // Cannot withdraw account to less than $100
            if (balanceAfterWithdraw < 100)
            {
                return "Cannot withdraw account to less than $100";
            }

            // Cannot withdraw more than 90% of their total balance
            if (percentageOfAccount > (decimal).9)
            {
                return "Cannot withdraw more than 90% of your total balance";
            }
            return "";
        }
    }
}
