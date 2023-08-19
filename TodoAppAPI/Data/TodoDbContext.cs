using Microsoft.EntityFrameworkCore;
using TodoAppAPI.Models;

namespace TodoAppAPI.Data
{
    public class TodoDbContext : DbContext
    {
           public TodoDbContext(DbContextOptions options) : base(options) { }

                   // connect to sqlite database
         /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlite("Data Source=TodoDb.db");
            }*/


        public DbSet<Todo> Todos { get; set; }
        
    }
}