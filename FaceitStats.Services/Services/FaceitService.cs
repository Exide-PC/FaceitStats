using System.Threading.Tasks;
using FaceitStats.Services.Models;

namespace FaceitStats.Services.Services
{
    public interface IFaceitService
    {
        Task<StatsModel> GetPlayerStats(string player);
    }

    public class FaceitService : IFaceitService
    {
        private readonly IFaceitClient _client;

        public FaceitService(IFaceitClient client)
        {
            _client = client;
        }

        public async Task<StatsModel> GetPlayerStats(string player)
        {
            return new StatsModel()
            {
                Player = new PlayerInfo
                {
                    Avatar = "dummy",
                    Name = "Exide",
                    Elo = 3001
                }
            };
        }
    }
}