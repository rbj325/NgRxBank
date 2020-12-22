using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NgRxBank.Gateways;
using NgRxBank.Models;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace NgRxBank.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UserAccountsController : ControllerBase
    {
        
        private readonly ILogger<UserAccountsController> _logger;
        private readonly IUserAccountGateway _accountGateway;

        public UserAccountsController(ILogger<UserAccountsController> logger, IUserAccountGateway accountGateway)
        {
            _logger = logger;
            _accountGateway = accountGateway;
        }

        [HttpGet]
        public IEnumerable<UserAccount> Get()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _accountGateway.GetAllAccounts(userId);
        }

        [HttpPost]
        public void Post([FromBody]UserAccount account)
        {
            account.UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _accountGateway.AddAccount(account);
        }

        [HttpDelete]
        public void Delete(Guid accountId)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _accountGateway.DeleteAccount(accountId, userId);
        }
    }
}
