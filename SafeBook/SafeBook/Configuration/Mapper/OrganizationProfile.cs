using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using SafeBook.Domain;
using SafeBook.Domain.HRMS;
using SafeBook.DTOs.HRMS;
using SafeBook.DTOs.MainPage;

namespace SafeBook.Configuration.Mapper
{
    public class OrganizationProfile : Profile
    {
        public OrganizationProfile()
        {
            CreateMap<Organization, OrganizationDto>().ReverseMap();
            CreateMap<Organization, CreateOrganizationDto>().ReverseMap();
            CreateMap<Organization, UpdateOrganizationDto>().ReverseMap();
        }
    }
}
