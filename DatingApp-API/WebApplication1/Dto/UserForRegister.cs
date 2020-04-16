using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Data
{
    public class UserForRegister
    {
        [Required]
        public string username { get; set; }
        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage = "You must enter at least 4 characters")]
        public string password { get; set; }
    }
}
