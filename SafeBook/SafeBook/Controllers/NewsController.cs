using Microsoft.AspNetCore.Mvc;
using SafeBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SafeBook.EfCoreInMemory;
using SafeBook.Domain.Persistence;
using Microsoft.AspNetCore.Http;
using SafeBook.DTOs.MainPage;
using AutoMapper;

namespace SafeBook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public NewsController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;

        }


        // GET .. api/news
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetNews()
        {
            ////SETUP FAKE DATA SEED
            //SetupFakeData();

            var allNews = _unitOfWork.News.GetAll();

            return Ok(allNews);
        }

        // GET .. api/news/{id:int}
        [HttpGet("{id:int}", Name = "GetOneNews")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetOneNews(int id)
        {
            ////SETUP FAKE DATA SEED
            //SetupFakeData();

            //_logger.LogInformation($"backend: {nameof(GetOneNews)} called...");

            //here we'll have to .Include() nested properties
            try
            {
                var news = _unitOfWork.News.Get(id);

                if (news == null)
                {
                    return NotFound($"backend: Not found news with id = {id}");
                }

                var result = _mapper.Map<NewsDto>(news);

                return Ok(result);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with getting. Something went wrong in {nameof(GetOneNews)");

                //return StatusCode(StatusCodes.Status500InternalServerError,
                //    "Internal server error, please try again later...");

                return Problem("backend: Error with getting. Something went wrong in {nameof(GetOneNews)");
            }
        }

        // POST ... api/news
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateNews([FromBody] CreateNewsDto newsDto)
        {
            ////SETUP FAKE DATA SEED
            //SetupFakeData();

            if (!ModelState.IsValid)
            {
                //_logger.LogError($"backend: Invalid ModelState - failed POST attempt in {nameof(CreateNews)}");
                return BadRequest(ModelState);
            }
            try
            {
                var news = _mapper.Map<News>(newsDto);

                //THIS PART SHOULD BE DELETED AFTER IMPLEMENTING EF CORE Database
                var maxId =_unitOfWork.News.GetAll()
                    .Select(x => x.Id)
                    .DefaultIfEmpty()
                    .Max();

                news.Id = maxId + 1;
                //

                _unitOfWork.News.Add(news);
                _unitOfWork.Save();

                return CreatedAtRoute("GetOneNews", new { id = news.Id }, news);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateNews)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(CreateNews)");
            }

            
        }

        // PUT ... api/news/{id:int}
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateNews(int id, [FromBody] UpdateNewsDto updateNewsDto)
        {
            ////SETUP FAKE DATA SEED
            //SetupFakeData();

            if (!ModelState.IsValid)
            {
                //_logger.LogError($"backend: Invalid ModelState - failed PUT attempt in {nameof(UpdateNews)}");
                return BadRequest(ModelState);
            }
            try
            {
                var news = _unitOfWork.News.Get(id);
                if (news == null)
                {
                    //_logger.LogError($"backend: Not found news with id = {id}");
                    return NotFound($"backend: Not found news with id = {id}");
                }

                _mapper.Map(updateNewsDto, news);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(UpdateNews)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(UpdateNews)"); 
            }
        }

    }
}
