using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FaceitStats.Services.Services;

namespace FaceitStats.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatsController : ControllerBase
    {
        private readonly IFaceitService _service;

        public StatsController(IFaceitService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]string player)
        {
            var result = await _service.GetPlayerStats(player);
            return Ok(result);
        }
    }
}