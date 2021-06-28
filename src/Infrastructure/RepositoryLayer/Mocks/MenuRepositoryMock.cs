using System;
using System.Collections.Generic;
using Domains.Entities;
using GenericErrorHandler;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RepositoryLayer.Interface;

namespace RepositoryLayer.Mocks
{
    public class MenuRepositoryMock : IMenuRepository
    {
        public async Task<Response<List<Menu>>> GetOMenuList(){
            throw new NotImplementedException();
            // return await new Task<Response<List<Menu>>>() { 
            //     ResponseItem = new List<Menu>(){ Menu = new Menu { Id = 1 } }
            // }; 
        }
    }
}