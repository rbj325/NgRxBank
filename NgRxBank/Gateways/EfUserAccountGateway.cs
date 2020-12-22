using NgRxBank.Data;
using NgRxBank.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NgRxBank.Gateways
{
    public class EfUserAccountGateway : UserAccountGateway
    {
        private readonly ApplicationDbContext _context;
        public EfUserAccountGateway(ApplicationDbContext context)
        {
            _context = context;
        }
        public override void AddAccount(UserAccount account)
        {
            _context.UserAccounts.Add(account);
            _context.SaveChanges();
        }

        public override void DeleteAccount(Guid accountId, string userId)
        {
            var account = _context.UserAccounts.FirstOrDefault(a => a.Id == accountId && a.UserId.Equals(userId, StringComparison.InvariantCultureIgnoreCase));
            if (account != null) {
                _context.UserAccounts.Remove(account);
                _context.SaveChanges();
            }
        }

        public override string Deposit(TransactionDTO deposit)
        {
            var validation = ValidateDeposit(deposit);

            if (string.IsNullOrEmpty(validation))
            {
                var account = _context.UserAccounts.Find(deposit.AccountId);
                account.Balance += deposit.Amount;

                _context.SaveChanges();
            }

            return validation;
        }

        public override IEnumerable<UserAccount> GetAllAccounts(string userId)
        {
            return _context.UserAccounts.Where(u => u.UserId.Equals(userId)).ToList();
        }

        public override string Withdraw(TransactionDTO withdraw)
        {
            var account = _context.UserAccounts.Find(withdraw.AccountId);
            var validation = ValidateWithdraw(withdraw, account);

            if (string.IsNullOrEmpty(validation))
            {
                var balanceAfterWithdraw = account.Balance - withdraw.Amount;

                account.Balance = balanceAfterWithdraw;

                _context.SaveChanges();
            }

            return validation;
        }
    }
}
