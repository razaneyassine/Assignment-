using Backend_API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        private readonly DataContext dc;
        public PersonsController(DataContext dc) {
            this.dc = dc;
        }
        [HttpGet]
        public IActionResult GetPersons()
        {

            var persons = dc.Persons.ToList();
            return Ok(persons);
        }

    
    }
}
