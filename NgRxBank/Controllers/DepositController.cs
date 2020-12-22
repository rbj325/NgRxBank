using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NgRxBank.Gateways;
using NgRxBank.Models;

namespace NgRxBank.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DepositController : ControllerBase
    {
        private readonly ILogger<UserAccountsController> _logger;
        private readonly IUserAccountGateway _accountGateway;

        public DepositController(ILogger<UserAccountsController> logger, IUserAccountGateway accountGateway)
        {
            _logger = logger;
            _accountGateway = accountGateway;
        }

        [HttpPost]
        public ActionResult Post([FromBody] TransactionDTO deposit)
        {
            var validation = _accountGateway.Deposit(deposit);
            if (!string.IsNullOrEmpty(validation))
            {
                return BadRequest(validation);
            }
            return Ok();
        }
    }
}
