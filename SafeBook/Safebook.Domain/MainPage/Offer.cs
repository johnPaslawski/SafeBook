﻿using SafeBook.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain
{
    public class Offer // TODO: to be simplified, propably we only need link to Offer in PDF document on google drive
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
    }
}
