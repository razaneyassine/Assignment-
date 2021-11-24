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
    public class GendersController : ControllerBase
    {
        private readonly DataContext dc;
        public GendersController(DataContext dc)
        {
            this.dc = dc;
        }
        [HttpGet]
        public IActionResult GetGenders()
        {

            var genders = dc.Genders.ToList();
            return Ok(genders);
        }
    }
}
