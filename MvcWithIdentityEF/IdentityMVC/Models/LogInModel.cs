﻿using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace IdentityMVC.Models.Identity
{
    public class LogInModel
    {
        //[Required]
        //[DataType(DataType.EmailAddress)]
        //public string Email { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [HiddenInput(DisplayValue = false)]
        public string ReturnUrl { get; set; }
    }
}