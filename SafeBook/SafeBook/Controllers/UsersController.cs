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
using Microsoft.AspNetCore.Authorization;
using SafeBook.DTOs.Common;
using SafeBook.Domain.Common;

namespace SafeBook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles="BoardMember, Admin", AuthenticationSchemes = "Bearer")]
    public class UsersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UsersController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;
        }

        // GET .. api/users?like={}
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUsers([FromQuery] string like)
        {
            var users = _unitOfWork.UserManager.Users;

            if (User.IsInRole("BoardMember"))
            {
                var shortUsers = users.Select(user => new  { FirstName = user.FirstName, LastName = user.LastName });
                if (!string.IsNullOrWhiteSpace(like))
                {
                    shortUsers = shortUsers.Where(x => x.FirstName.Contains(like) || x.LastName.Contains(like));
                }

                return Ok(shortUsers.ToList());
            }

            if (!string.IsNullOrWhiteSpace(like))
            {
                users = users.Where(x => x.FirstName.Contains(like)
                                          || x.LastName.Contains(like)
                                          || x.AddressLine1.Contains(like)
                                          || x.Email.Contains(like)
                                          || x.PhoneNumber.Contains(like));
            }
            var usersWithRoles = users.ToList();
            var DTOs = new List<UserDto>();

            foreach (var user in usersWithRoles)
            {
                var roleName = _unitOfWork.UserManager.GetRolesAsync(user).Result.First(); // TODO catch error for users with no roles assigned
                var role = _unitOfWork.RoleManager.FindByNameAsync(roleName).Result;
                var userDTO = _mapper.Map<UserDto>(user);
                userDTO.Role = role;
                DTOs.Add(userDTO);
            }

            return Ok(DTOs);
        }



        // GET .. api/users/{id:int}
        [HttpGet("{id:guid}", Name = "GetUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUser(Guid id)
        {
            try
            {
                var user = _unitOfWork.UserManager.FindByIdAsync(id.ToString()).Result;

                if (user == null)
                {
                    return NotFound($"backend: Not found user with id = {id}");
                }

                var roleName = _unitOfWork.UserManager.GetRolesAsync(user).Result.First();
                var role = _unitOfWork.RoleManager.FindByNameAsync(roleName).Result;
                var userDTO = _mapper.Map<UserDto>(user);
                userDTO.Role = role;
                var result = userDTO;

                return Ok(result);
            }
            catch (Exception exception)
            {
                return Problem($"backend: Error with getting. Something went wrong in {nameof(GetUser)}");
            }
        }

        //DELETE ... api/users/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(Guid id)
        {
            // najpierw weryfikujemy czy istnieje
            var userToDelete = _unitOfWork.UserManager.FindByIdAsync(id.ToString()).Result;

            if (userToDelete == null)
            {
                return NotFound();
            }

            if (_unitOfWork.UserManager.DeleteAsync(userToDelete).Result.Succeeded) return NoContent();

            return BadRequest();
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
                var user = _mapper.Map<AppUser>(createUserDto);


                var result = _unitOfWork.UserManager.CreateAsync(user).Result;
                if (result.Succeeded)
                {
                    var roleName = _unitOfWork.RoleManager.FindByIdAsync(createUserDto.RoleId).Result.Name;
                    _unitOfWork.UserManager.AddToRoleAsync(user, roleName).Wait();
                    return CreatedAtRoute("GetUser", new { id = user.Id }, user);
                }

                throw new Exception("Cannot create this user.");

            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateNews)}");
                return Problem(exception.ToString(), "backend: Error with creating. Something went wrong in {nameof(CreateNews)");
            }


        }

        // PUT ... api/users/{id:int}
        [HttpPut("{id:guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateUser(Guid id, [FromBody] UpdateUserDto updateUserDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = _unitOfWork.UserManager.FindByIdAsync(id.ToString()).Result;
                if (user == null)
                {
                    return NotFound($"backend: Not found user with id = {id}");
                }



                _mapper.Map(updateUserDto, user);
                var userUpdated = _unitOfWork.UserManager.UpdateAsync(user).Result.Succeeded;
                if (!userUpdated) throw new Exception("Cannot update this user");

                var role = _unitOfWork.RoleManager.FindByIdAsync(updateUserDto.RoleId).Result;
                if (!_unitOfWork.UserManager.IsInRoleAsync(user, role.Name).Result)
                {
                    var result = _unitOfWork.UserManager.AddToRoleAsync(user, role.Name).Result;
                    if(!result.Succeeded) throw new Exception("Cannot set a role for this user");
                }

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
            var allRoles = _unitOfWork.RoleManager.Roles.ToList();

            return Ok(allRoles);
        }

        // GET..api/users/roles/{id}
        [HttpGet("roles/{id:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetRole(Guid id)
        {
            var role = _unitOfWork.RoleManager.FindByIdAsync(id.ToString()).Result;
            if (role == null)
            {
                return NotFound($"backend: Not found role with id = {id}");
            }
            return Ok(role);
        }

        // GET .. api/users/{userId:int}/roles
        [HttpGet("{userId:guid}/roles", Name = "GetUserRole")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUserRole(Guid userId)
        {
            try
            {
                var user = _unitOfWork.UserManager.FindByIdAsync(userId.ToString()).Result;
                var role = _unitOfWork.UserManager.GetRolesAsync(user).Result.First();

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