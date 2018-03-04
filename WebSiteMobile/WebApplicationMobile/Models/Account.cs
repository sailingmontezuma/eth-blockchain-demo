using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationMobile.Models
{
    public class Account
    {
        public int ID { get; set; }
        public string PrivateKey { get; set; }

        public string Address { get; set; }

        public string PublicKey { get; set; }
    }
}
