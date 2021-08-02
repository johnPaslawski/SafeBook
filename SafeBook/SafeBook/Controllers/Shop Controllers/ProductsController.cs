using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;
using SafeBook.DTOs.MainPage;

namespace SafeBook.Controllers.Shop_Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProductsController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;
        }

        // GET .. api/products
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProducts()
        {
            var allProducts = _unitOfWork.Products.GetAll();

            return Ok(allProducts);
        }


        // GET .. api/products/{id}
        [HttpGet("{id}", Name = "GetProduct")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProduct(int id)
        {
            try
            {
                var product = _unitOfWork.Products.Get(id);

                if (product == null)
                {
                    return NotFound($"backend: Not found product with id = {id}");
                }

                return Ok(product);
            }
            catch (Exception)
            {
                return Problem($"backend: Error with getting. Something went wrong in {nameof(GetProduct)}");
            }
        }
    }
}
