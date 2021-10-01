using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using SafeBook.Domain;
using SafeBook.DTOs.MainPage;

namespace SafeBook.Configuration.Mapper
{
    public class NewsProfile : Profile
    {
        public NewsProfile()
        {
            CreateMap<News, NewsDto>().ReverseMap();
            CreateMap<News, CreateNewsDto>().ReverseMap();
            CreateMap<News, UpdateNewsDto>().ReverseMap();
        }
    }
}