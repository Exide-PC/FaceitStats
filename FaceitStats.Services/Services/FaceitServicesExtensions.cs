using Microsoft.Extensions.DependencyInjection;

namespace FaceitStats.Services.Services
{
    public static class FaceitServicesExtensions
    {
        public static IServiceCollection RegisterFaceitStatsServices(this IServiceCollection services)
        {
            services.AddScoped<IFaceitClient, FaceitClient>();
            services.AddScoped<IFaceitService, FaceitService>();
            return services;
        }
    }
}