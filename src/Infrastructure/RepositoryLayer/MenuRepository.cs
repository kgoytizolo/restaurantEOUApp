using System;
using System.Collections.Generic;
using Domains.Entities;
using GenericErrorHandler;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RepositoryLayer.Interface;

namespace RepositoryLayer
{
    public class MenuRepository : IMenuRepository
    {
        public async Task<Response<List<Menu>>> GetOMenuList(){
            throw new NotImplementedException();
        }
    }
}