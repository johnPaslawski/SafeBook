using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain
{
    public class Offer : BaseModel
    {
        public string Description { get; set; }
        public string Name { get; set; }
    }
}
