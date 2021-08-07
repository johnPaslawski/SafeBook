using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SafeBook.Domain;
using SafeBook.Domain.Persistence;
using SafeBook.DTOs.MainPage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProjectsController(IUnitOfWork uow, IMapper mapper)
        {
            _unitOfWork = uow;
            _mapper = mapper;

        }


        // GET .. api/projects
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProjects([FromQuery] string like)
        {
            if (!string.IsNullOrWhiteSpace(like))
            {
                // dodać sortowanie in title first, in description second
                //var news = _unitOfWork.News.FindString(like);

                //sposób 2:
                var news = _unitOfWork.Projects.Find(x => x.Title.Contains(like) || x.Description.Contains(like));

                return Ok(news);
            }

            var allProjects = _unitOfWork.Projects.GetAll();

            return Ok(allProjects);
        }


        // GET .. api/projects/{id:int}
        [HttpGet("{id:int}", Name = "GetProject")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetProject(int id)
        {
            //_logger.LogInformation($"backend: {nameof(GetProject)} called...");

            //here we'll have to .Include() nested properties
            try
            {
                var project = _unitOfWork.Projects.Get(id);

                if (project == null)
                {
                    return NotFound($"backend: Not found any project with id = {id}");
                }

                var result = _mapper.Map<ProjectDto>(project);

                return Ok(result);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with getting. Something went wrong in {nameof(GetProject)");

                //return StatusCode(StatusCodes.Status500InternalServerError,
                //    "Internal server error, please try again later...");

                return Problem(exception.ToString(),"backend: Error with getting. Something went wrong in {nameof(GetProject)");
            }
        }

        // POST ... api/projects
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateProject([FromBody] CreateProjectDto projectDto)
        {
            if (!ModelState.IsValid)
            {
                //_logger.LogError($"backend: Invalid ModelState - failed POST attempt in {nameof(CreateProject)}");
                return BadRequest(ModelState);
            }
            try
            {
                var project = _mapper.Map<Project>(projectDto);

                

                _unitOfWork.Projects.Add(project);
                _unitOfWork.Save();

                return CreatedAtRoute("GetProject", new { id = project.Id }, project);
            }
            catch (Exception exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(CreateProject)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(CreateProject)");
            }


        }

        // PUT ... api/projects/{id:int}
        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult UpdateProject(int id, [FromBody] UpdateProjectDto updateProjectDto)
        {

            if (!ModelState.IsValid)
            {
                //_logger.LogError($"backend: Invalid ModelState - failed PUT attempt in {nameof(UpdateProject)}");
                return BadRequest(ModelState);
            }
            try
            {
                var project = _unitOfWork.Projects.Get(id);
                if (project == null)
                {
                    //_logger.LogError($"backend: Not found project with id = {id}");
                    return NotFound($"backend: Not found project with id = {id}");
                }

                _mapper.Map(updateProjectDto, project);
                _unitOfWork.Save();

                return NoContent();
            }
            catch (Exception)
            {
                //_logger.LogError(exception, $"backend: Error with creating. Something went wrong in {nameof(UpdateProject)}");
                return Problem("backend: Error with creating. Something went wrong in {nameof(UpdateProject)");
            }
        }

    }
}
