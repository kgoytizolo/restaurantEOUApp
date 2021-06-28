using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Domains.Entities;
using GenericErrorHandler;
using RepositoryLayer.Interface;

namespace ServiceLayer.Controllers
{
    [ApiController]
    [Route("api/menu")]
    public class MenuController : ControllerBase
    {
        private readonly ILogger<MenuController> _logger;
        private readonly IMenuRepository _menuRepository;

        public MenuController(ILogger<MenuController> logger, IMenuRepository menuRepository)
        {
            _logger = logger;
            _menuRepository = menuRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(Response<List<Menu>>))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]            
        public async Task<IActionResult> Get()
        {
            var serviceResponse = new Response<List<Menu>>();
            serviceResponse = await _menuRepository.GetOMenuList();
            return Ok(serviceResponse);
        }
    }
}
