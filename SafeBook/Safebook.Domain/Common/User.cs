using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Common
{
    public class User
    {
        // Personal Data properties
        //          +
        public int Id { get; set; }
        public Role Role { get; set; }
    }
}
