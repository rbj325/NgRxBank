using System;
using System.ComponentModel.DataAnnotations;

namespace NgRxBank.Models
{
    public class TransactionDTO
    {
        [Required]
        public Guid AccountId { get; set; }

        [Required]
        public decimal Amount { get; set; }

    }
}
