﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.Domain.Persistence
{

    public interface IUnitOfWork : IDisposable
    {
        INewsRepository News { get; }
        IUsersRepository Users { get; }
        IProjectsRepository Projects { get; }
        int Save();
    }
}