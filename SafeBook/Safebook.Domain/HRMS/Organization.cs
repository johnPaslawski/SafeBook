using SafeBook.Domain.Common;
using SafeBook.Domain.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.HRMS
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Adress { get; set; } // (idziemy w stronę odrębnej klasy)
        public string REGON { get; set; } // (typ REGONU zależy od tego czy i jaka będzie walidacja)
        public string NIP { get; set; }
        public string KRS { get; set; }
        public string BankAccountNumber { get; set; }
        public List<User> MembersList { get; set; }
    }
}
