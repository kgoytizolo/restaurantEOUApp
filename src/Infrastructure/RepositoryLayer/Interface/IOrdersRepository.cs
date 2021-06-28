using System.Collections.Generic;
using Domains.Entities;
using GenericErrorHandler;
using System.Threading.Tasks;

namespace RepositoryLayer.Interface
{
    public interface IOrdersRepository
    {
        Task<Response<Order>> GetOrdersList(OrderStatus[] orderStatus = null);
        Task<Response<OrderDetails>> GetOrderDetailsInChunks(MenuType[] menuType);
        Task<Response> CreateOrder(OrderDetails[] orderDetails);
    }
}