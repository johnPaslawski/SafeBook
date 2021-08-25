using Microsoft.AspNetCore.Mvc;
using SafeBook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using SafeBook.EfCoreInMemory;
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
                return Problem($"backend: Error with getting. Something went wrong in {nameof(GetUser)}");
            }
        }

        //DELETE ... api/users/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            // najpierw weryfikujemy czy istnieje
            var userToDelete = _unitOfWork.Users.Get(id);

            if (userToDelete == null)
            {
                return NotFound();
            }

            _unitOfWork.Users.Remove(userToDelete);
            _unitOfWork.Save();

            return NoContent();
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


                _unitOfWork.Users.Add(user);
                _unitOfWork.Save();

                return CreatedAtRoute("GetUser", new { id = user.Id }, user);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateNews)}");
                return Problem(exception.ToString(), "backend: Error with creating. Something went wrong in {nameof(CreateNews)");
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

        // GET .. api/users/roles
        [HttpGet("roles")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetRoles()
        {
            var allRoles = _unitOfWork.Roles.GetAllRoles();

            return Ok(allRoles);
        }

        // GET..api/users/roles/{id}
        [HttpGet("roles/{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetRole(int id)
        {
            var role = _unitOfWork.Roles.GetRole(id);
            if (role == null)
            {
                return NotFound($"backend: Not found role with id = {id}");
            }
            return Ok(role);
        }

        // GET .. api/users/{userId:int}/roles
        [HttpGet("{userId:int}/roles", Name = "GetUserRole")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUserRole(int userId)
        {
            try
            {
                var role = _unitOfWork.Roles.GetUserRole(userId);

                if (role == null)
                {
                    return NotFound($"backend: Not found role in user with userId = {userId}");
                }

                var result = _mapper.Map<RoleDto>(role); // temporarily RoleDto and Role domain model are identical, no need to implementing UpdateRoleDto and CreateRoleDto

                return Ok(result);
            }
            catch (Exception exception)
            {
                return Problem($"{exception}", $"; backend: Error with getting. Something went wrong in {nameof(GetUserRole)}");
            }
        }

    }
}