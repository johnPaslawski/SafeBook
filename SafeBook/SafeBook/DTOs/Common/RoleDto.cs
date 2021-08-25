﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.Common
{
    public class RoleDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual IList<UserDto> Users { get; set; }
    }
}
