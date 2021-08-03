using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;
using SafeBook.DTOs.MainPage;

namespace SafeBook.Controllers.ShopControllers
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
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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

        // GET .. api/products/categories
        [HttpGet("categories")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProductCategories()
        {
            var allCategories = _unitOfWork.ProductCategories.GetAll();

            return Ok(allCategories);
        }

        // GET .. api/products/categories/{id}
        [HttpGet("categories/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProductCategory(int id)
        {
            try
            {
                var productCategory = _unitOfWork.ProductCategories.GetProductCategory(id);

                if (productCategory == null)
                {
                    return NotFound($"backend: Not found productCategory with id = {id}");
                }

                return Ok(productCategory);
            }
            catch (Exception)
            {
                return Problem($"backend: Error with getting productCategory. Something went wrong in {nameof(GetProductCategory)}");
            }
        }

        // DO WE NEED THIS METHOD ????
        //// GET .. api/products/{id}/category  
        //[HttpGet("{id}/category", Name = "GetProductCategory")]
        //[ProducesResponseType(StatusCodes.Status200OK)]
        //[ProducesResponseType(StatusCodes.Status500InternalServerError)]




    }
}
