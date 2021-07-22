using SafeBook.Domain.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain
{
    // TODO: to be simplified
    public class Offer : BaseModel
    {
        public string Description { get; set; }
        public string Name { get; set; }
    }
}
