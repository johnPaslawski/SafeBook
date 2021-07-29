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
using SafeBook.DTOs.Common;
using SafeBook.Domain.Common;

namespace SafeBook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UsersController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;

        }

        // GET .. api/users
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUsers()
        {
            var allUsers = _unitOfWork.Users.GetAll();

            return Ok(allUsers);
        }

        // GET .. api/users/{id:int}
        [HttpGet("{id:int}", Name = "GetUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUser(int id)
        {
            try
            {
                var user = _unitOfWork.Users.Get(id);

                if (user == null)
                {
                    return NotFound($"backend: Not found user with id = {id}");
                }

                var result = _mapper.Map<UserDto>(user);

                return Ok(result);
            }
            catch (Exception exception)
            {
                return Problem("backend: Error with getting. Something went wrong in {nameof(GetUser)");
            }
        }

        // POST ... api/users
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateUser([FromBody] CreateUserDto createUserDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = _mapper.Map<User>(createUserDto);

                //THIS PART SHOULD BE DELETED AFTER IMPLEMENTING EF CORE Database
                var maxId = _unitOfWork.Users.GetAll()
                    .Select(x => x.Id)
                    .DefaultIfEmpty()
                    .Max();

                user.Id = maxId + 1;
                //

                _unitOfWork.Users.Add(user);
                _unitOfWork.Save();

                return CreatedAtRoute("GetUser", new { id = user.Id }, user);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateNews)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(CreateNews)");
            }


        }

        // PUT ... api/users/{id:int}
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateUser(int id, [FromBody] UpdateUserDto updateUserDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = _unitOfWork.Users.Get(id);
                if (user == null)
                {
                    return NotFound($"backend: Not found user with id = {id}");
                }

                _mapper.Map(updateUserDto, user);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception)
            {
                return Problem("backend: Error with creating. Something went wrong in {nameof(UpdateUser)");
            }
        }

    }
}