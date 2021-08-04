using Microsoft.EntityFrameworkCore;
using Safebook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SafeBook.EfCore.Infrastructure.Persistance.Implementations
{
    public abstract class RepositoryEfCore<TEntity> : IRepository<TEntity> where TEntity : class // TODO: Repository can use DAO instead of DbContext
    {
        protected readonly DbContext _dbContext;


        protected RepositoryEfCore(DbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public virtual TEntity Get(int id)
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

        public void Modify(TEntity entity)
        {
            _dbContext.Attach(entity);
            _dbContext.Entry(entity).State = EntityState.Modified;
        }
    }
}
