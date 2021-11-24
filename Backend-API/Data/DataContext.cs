using Backend_API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend_API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Person> Persons { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}
