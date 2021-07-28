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
    public class NewsController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public NewsController(IUnitOfWork uow)
        {
            _unitOfWork = uow;

            //SETUP FAKE DATA SEED
            News news = new News { Id = 1, CreationDate = DateTime.Now, Description = "fsdfsdDecription of this cool news", Title = "News nr 1" };
            News news2 = new News { Id = 2, CreationDate = DateTime.Now, Description = "asdasdasdasd of this cool news", Title = "News nr 2" };
            News news3 = new News { Id = 3, CreationDate = DateTime.Now, Description = "rtyrtyrty of this cool news", Title = "News nr 3" };

            _unitOfWork.News.Add(news);
            _unitOfWork.News.Add(news2);
            _unitOfWork.News.Add(news3);

            _unitOfWork.Save();
        }

        [HttpGet("news")]
        public IActionResult GetNews()
        {
             
            var allNews = _unitOfWork.News.GetAll();

            return Ok(allNews);
        }

        [HttpPost("news")]
        public IActionResult PostNews([FromBody] News news)
        {
            //var maxId = unitOfWork
            //    .News
            //    .GetAll()
            //    .Max(x => x.Id);

            _unitOfWork.News.Add(news);
            return Ok(news);
            
        }
    }
}
