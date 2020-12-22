using System;

namespace NgRxBank.Models
{
    public class TransactionDTO
    {

        public Guid AccountId { get; set; }

        public decimal Amount { get; set; }

    }
}
