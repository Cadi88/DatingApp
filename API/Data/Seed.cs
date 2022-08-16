using System.Security.Cryptography;
using System.Text;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json; 

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            // var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            var users = JsonConvert.DeserializeObject<List<AppUser>>(userData);
            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();

                context.Users.Add(user);
            }

            await context.SaveChangesAsync();
        }
    }
}