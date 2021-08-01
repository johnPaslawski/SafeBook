using AutoMapper;
using SafeBook.Domain;
using SafeBook.DTOs.MainPage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.Configuration.Mapper
{
    public class ProjectsProfile : Profile
    {
        public ProjectsProfile()
        {
            CreateMap<Project, ProjectDto>().ReverseMap();
            CreateMap<Project, CreateProjectDto>().ReverseMap();
            CreateMap<Project, UpdateProjectDto>().ReverseMap();
        }
    }
}
