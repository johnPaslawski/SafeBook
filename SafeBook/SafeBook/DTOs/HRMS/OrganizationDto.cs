using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.HRMS
{
    public class CreateOrganizationDto
    {
       
        public string Name { get; set; }
        public string Adress { get; set; } // (idziemy w stronę odrębnej klasy)
        public string REGON { get; set; } // (typ REGONU zależy od tego czy i jaka będzie walidacja)
        public string NIP { get; set; }
        public string KRS { get; set; }
        public string BankAccountNumber { get; set; }
       
    }
    

    public class UpdateOrganizationDto : CreateOrganizationDto
    {
       
    }

    public class OrganizationDto : CreateOrganizationDto
    {
        public int Id { get; set; }
    }
}
