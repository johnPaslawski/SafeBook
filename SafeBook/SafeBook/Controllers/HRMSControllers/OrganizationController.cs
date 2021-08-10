using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SafeBook.Domain.HRMS;
using SafeBook.Domain.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.Controllers.HRMSControllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrganizationController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public OrganizationController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;

        }

        // GET .. api/organization/
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetOrganization()
        {
            var organization = _unitOfWork.Organization.GetOrganizationWithMembersList();


            return Ok(organization);
        }


        // PUT ... api/organization/{id:int}
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateOrganization(int id, [FromBody] Organization updateOrganization)
        {
            if (!ModelState.IsValid)
            {
                //_logger.LogError($"backend: Invalid ModelState - failed PUT attempt in {nameof(UpdateOrganization)}");
                return BadRequest(ModelState);
            }
            try
            {
                var organization = _unitOfWork.Organization.Get(id);
                if (organization == null)
                {
                    //_logger.LogError($"backend: Not found organization with id = {id}");
                    return NotFound($"backend: Not found organization with id = {id}");
                }

                updateOrganization.Id = organization.Id;
                _mapper.Map(updateOrganization, organization);
                
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(UpdateOrganization)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(UpdateOrganization)");
            }
        }

    }
}
