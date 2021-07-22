using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Domain.Common
{
    class User : BaseModel
    {
        // Personal Data properties
        //          +
        public Role Role { get; set; }
    }
}
