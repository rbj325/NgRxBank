using Moq;
using NgRxBank.Gateways;
using NgRxBank.Models;
using System;
using Xunit;

namespace NgRxBank.Tests
{
    public class AccountGatewayTests
    {
        [Fact]
        public void AccountCannotHaveLessThan100()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)102.00};
            var gateway = new Mock<UserAccountGateway>().Object;
            var withdraw = new TransactionDTO() { Amount = 5 };
            
            // Act
            var validation = gateway.ValidateWithdraw(withdraw, account);

            // Assert
            Assert.True(!string.IsNullOrEmpty(validation), "Account should not be withdrawn below $100");
        }
        [Fact]
        public void AccountCanHave100()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)102.00 };
            var gateway = new Mock<UserAccountGateway>().Object;
            var withdraw = new TransactionDTO() { Amount = 2 };

            // Act
            var validation = gateway.ValidateWithdraw(withdraw, account);

            // Assert
            Assert.True(string.IsNullOrEmpty(validation), "Account should be able to withdraw to $100");
        }

        [Fact]
        public void CannotWithdrawMoreThan90Percent()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)1100.00 };
            var gateway = new Mock<UserAccountGateway>().Object;
            var withdraw = new TransactionDTO() { Amount = 995 };

            // Act
            var validation = gateway.ValidateWithdraw(withdraw, account);

            // Assert
            Assert.True(!string.IsNullOrEmpty(validation), "Cannot withdraw more than 90% in a single transaction");
        }
        [Fact]
        public void CanWithdraw90Percent()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)1100.00 };
            var gateway = new Mock<UserAccountGateway>().Object;
            var withdraw = new TransactionDTO() { Amount = 990 };

            // Act
            var validation = gateway.ValidateWithdraw(withdraw, account);

            // Assert
            Assert.True(string.IsNullOrEmpty(validation), "Should be able to withdraw 90% in a single transaction");
        }

        [Fact]
        public void CannotDepositMoreThan10000()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)100.00 };
            var gateway = new Mock<UserAccountGateway>().Object;
            var deposit = new TransactionDTO() { Amount = (decimal)10000.01 };

            // Act
            var validation = gateway.ValidateDeposit(deposit);

            // Assert
            Assert.True(!string.IsNullOrEmpty(validation), "Should not be able to deposit $10,000.01.");
        }


        [Fact]
        public void CanDeposit10000()
        {
            // Arrange
            var account = new UserAccount() { Balance = (decimal)100.00 };
            var gateway = new Mock<UserAccountGateway>().Object;
            var deposit = new TransactionDTO() { Amount = (decimal)10000 };

            // Act
            var validation = gateway.ValidateDeposit(deposit);

            // Assert
            Assert.True(string.IsNullOrEmpty(validation), "Should be able to deposit $10,000");
        }

        }
}
