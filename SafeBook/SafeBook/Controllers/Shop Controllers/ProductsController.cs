//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Linq;
//using AutoMapper;
//using Microsoft.AspNetCore.Http;
//using SafeBook.Domain;
//using SafeBook.Domain.Persistence;
//using SafeBook.DTOs.MainPage;

//namespace SafeBook.Controllers.Shop_Controllers
//{

//    [ApiController]
//    [Route("api/[controller]")]
//    public class ProductsController : ControllerBase
//    {
//        private readonly IUnitOfWork _unitOfWork;
//        private readonly IMapper _mapper;

//        public ProductsController(IUnitOfWork uow, IMapper mapper)
//        {
//            _unitOfWork = uow;
//            _mapper = mapper;

//        }


//        // GET .. api/products
//        [HttpGet]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public IActionResult GetProducts()
//        {
           
//            var allProducts = _unitOfWork.Products.GetAll();

//            return Ok(allProducts);
//        }

//        // GET .. api/products/{id:int}
//        [HttpGet("{id:int}", Name = "GetProduct")]
//        [ProducesResponseType(StatusCodes.Status200OK)]
//        [ProducesResponseType(StatusCodes.Status404NotFound)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public IActionResult GetProduct(int id)
//        {
//            try
//            {
//                var product = _unitOfWork.Products.Get(id);

//                if (product == null)
//                {
//                    return NotFound($"backend: Not found product with id = {id}");
//                }

//                var result = _mapper.Map<ProductDto>(product);

//                return Ok(result);
//            }
//            catch (Exception exception)
//            {
//                return Problem("backend: Error with getting. Something went wrong in {nameof(GetProduct)");
//            }
//        }

//        // POST ... api/products
//        [HttpPost]
//        [ProducesResponseType(StatusCodes.Status201Created)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public IActionResult CreateProducts([FromBody] CreateProductDto createProductDto)
//        {

//            if (!ModelState.IsValid)
//            {
               
//                return BadRequest(ModelState);
//            }
//            try
//            {
//                var news = _mapper.Map<News>(newsDto);

//                //THIS PART SHOULD BE DELETED AFTER IMPLEMENTING EF CORE Database
//                var maxId = _unitOfWork.News.GetAll()
//                    .Select(x => x.Id)
//                    .DefaultIfEmpty()
//                    .Max();

//                news.Id = maxId + 1;
//                //

//                _unitOfWork.News.Add(news);
//                _unitOfWork.Save();

//                return CreatedAtRoute("GetOneNews", new { id = news.Id }, news);
//            }
//            catch (Exception exception)
//            {
//                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateNews)}");
//                return Problem("backend: Error with creating. Something went wrong in {nameof(CreateNews)");
//            }


//        }

//        // PUT ... api/news/{id:int}
//        [HttpPut("{id:int}")]
//        [ProducesResponseType(StatusCodes.Status204NoContent)]
//        [ProducesResponseType(StatusCodes.Status400BadRequest)]
//        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
//        public IActionResult UpdateNews(int id, [FromBody] UpdateNewsDto updateNewsDto)
//        {
//            ////SETUP FAKE DATA SEED
//            //SetupFakeData();

//            if (!ModelState.IsValid)
//            {
//                //_logger.LogError($"backend: Invalid ModelState - failed PUT attempt in {nameof(UpdateNews)}");
//                return BadRequest(ModelState);
//            }
//            try
//            {
//                var news = _unitOfWork.News.Get(id);
//                if (news == null)
//                {
//                    //_logger.LogError($"backend: Not found news with id = {id}");
//                    return NotFound($"backend: Not found news with id = {id}");
//                }

//                _mapper.Map(updateNewsDto, news);
//                _unitOfWork.Save();

//                return NoContent();
//            }
//            catch (Exception)
//            {
//                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(UpdateNews)}");
//                return Problem("backend: Error with creating. Something went wrong in {nameof(UpdateNews)");
//            }
//        }

//    }
//}
