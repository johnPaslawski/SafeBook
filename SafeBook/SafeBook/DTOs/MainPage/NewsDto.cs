using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SafeBook.DTOs.MainPage
{
    public class NewsDto : CreateNewsDto
    {
        [Required]
        public int Id { get; set; }
    }

    public class CreateNewsDto
    {
        [Required]
        [StringLength(maximumLength: 100, ErrorMessage = "Title exceeds maximum lenght 100 characters")]
        public string Title { get; set; }
        [Required]
        [StringLength(maximumLength: 10000, ErrorMessage = "Description exceeds maximum lenght 10000 characters")]
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        [Required]
        public string ImageName { get; set; }
    }

    public class UpdateNewsDto : CreateNewsDto
    {
    }

    // AND DIFFRENT CLASSES NEEDED HERE:
    // 
    
}
