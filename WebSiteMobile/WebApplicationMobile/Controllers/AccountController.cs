using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationMobile.Data;
using WebApplicationMobile.Models;

namespace WebApplicationMobile.Controllers
{
    public class AccountController : Controller
    {
        private readonly AccountContext _context;

        public AccountController(AccountContext context)
        {
            _context = context;
        }


        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void SaveAccount([FromBody]string value)
        {

            Account account = new Account
            {
                    Address = "grerg",
                    PrivateKey = "rtgroo egere",
                    PublicKey = "g458 748679485"
            };

            _context.Accounts.Add(account);

            try
            {
                _context.SaveChanges();
            }
            catch (Exception e)
            {

            }


        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
