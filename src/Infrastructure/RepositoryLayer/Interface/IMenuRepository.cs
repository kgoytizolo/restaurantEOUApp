using System.Collections.Generic;
using Domains.Entities;
using GenericErrorHandler;
using System.Threading.Tasks;

namespace RepositoryLayer.Interface
{
    public interface IMenuRepository
    {
        Task<Response<List<Menu>>> GetOMenuList();
    }
}