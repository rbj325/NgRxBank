using System;

namespace NgRxBank.Models
{
    public class UserAccount
    {
        public Guid Id { get; set; }
        public decimal Balance { get; set; }
        public string UserId { get; set; }
    }
}
