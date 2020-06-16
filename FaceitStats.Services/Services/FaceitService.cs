using System.Threading.Tasks;
using FaceitStats.Services.Models;

namespace FaceitStats.Services.Services
{
    public interface IFaceitService
    {
        Task<Stats> GetPlayerStats(string player);
    }

    public class FaceitService : IFaceitService
    {
        private readonly IFaceitClient _client;

        public FaceitService(IFaceitClient client)
        {
            _client = client;
        }

        public async Task<Stats> GetPlayerStats(string player)
        {
            return new Stats()
            {
                PlayerName = "Exide"
            };
        }
    }
}