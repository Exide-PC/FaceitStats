using System.Threading.Tasks;
using FaceitStats.Services.Models;

namespace FaceitStats.Services.Services
{
    public interface IFaceitClient
    {
        Task<Player> GetPlayer(string player);
    }

    public class FaceitClient : IFaceitClient
    {
        public Task<Player> GetPlayer(string player)
        {
            throw new System.NotImplementedException();
        }
    }
}