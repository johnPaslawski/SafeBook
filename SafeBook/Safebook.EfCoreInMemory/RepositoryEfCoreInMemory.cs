using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SafeBook.Domain;
using Safebook.Domain.Persistence;
using SafeBook.Domain.Common;

namespace SafeBook.EfCoreInMemory
{
    public abstract class RepositoryEfCoreInMemory<TEntity> : IRepository<TEntity> where TEntity : class // TODO: Repository can use DAO instead of DbContext
    {
        protected readonly DbContext _dbContext;

        protected RepositoryEfCoreInMemory(DbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public TEntity Get(int id)
        {
            return _dbContext.Find<TEntity>(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>().ToList();
        }

        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbContext.Set<TEntity>().Where(predicate); // TODO; isn't a ToList call necessary here?
        }

        public void Add(TEntity entity)
        {
            _dbContext.Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            _dbContext.AddRange(entities);
        }

        public void Remove(TEntity entity)
        {
            _dbContext.Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            _dbContext.RemoveRange(entities);
        }
    }
}
