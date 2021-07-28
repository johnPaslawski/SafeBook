using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.MainPage
{
    public class NewsDto
    {
        [Required]
        public int Id { get; set; }
    }

    public class CreateNewsDto : NewsDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        [Required]
        public string ImageName { get; set; }
    }

    public class UpdateNewsDto
    {
    }

    // AND DIFFRENT CLASSES NEEDED HERE:
    // 
    
}
