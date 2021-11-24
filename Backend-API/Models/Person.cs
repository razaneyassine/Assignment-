using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_API.Models
{
    public class Person
    {
        public int Id { set; get; }
        public string FirstName { get; set; }
        public string FatherName { get; set; }

        public string LastName { get; set; }

        [DataType(DataType.Date)]
        public DateTime DateofBirth { get; set; }
        public string Address { get; set; }
        public int CountryId { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }
        public int GenderId { get; set; }

        [ForeignKey("GenderId")]
        public Gender Gender { get; set; }
        public string MobilePhone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Notes { get; set; }
    }
}
