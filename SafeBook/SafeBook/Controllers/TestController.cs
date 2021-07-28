using Microsoft.AspNetCore.Mvc;
using SafeBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SafeBook.EfCoreInMemory;
using SafeBook.Domain.Persistence;

namespace SafeBook.Controllers
{
    [Route("api/test")]
    public class TestController : Controller
    {
        private readonly IUnitOfWork unitOfWork;

        public TestController(SafeBookDbContextInMemory context)
        {
            unitOfWork = new UnitOfWorkEfCoreInMemory(context);

            
        }

        [HttpGet("news")]
        public IActionResult GetNews(int id)
        {
            //var maxId = unitOfWork
            //    .News
            //    .GetAll()
            //    .Max(x => x.Id);

            News news = new News { Id = 1, CreationDate = DateTime.Now, Description = "fsdfsdDecription of this cool news", Title = "News nr 1" };
            
            unitOfWork.News.Add(news);


            var news1 = unitOfWork.News.Get(id);
            return Ok(news1);
        }

        [HttpPost("news")]
        public IActionResult PostNews([FromBody] News news)
        {
            
            unitOfWork.News.Add(news);
            return Ok(news);
            
        }
    }
}
