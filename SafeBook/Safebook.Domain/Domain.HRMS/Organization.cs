using SafeBook.Domain.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Domain.HRMS
{
    public class Organization
    {
        public string Name { get; set; }
        public string Adress { get; set; } // TODO: Adress should be separated into detailed properties ?
        public string REGON { get; set; } // TODO: strings, or int's ? for the following data
        public string NIP { get; set; }
        public string KRS { get; set; }
        public string BankAccountNumber { get; set; }
        public List<User> MembersList { get; set; }
    }
}
