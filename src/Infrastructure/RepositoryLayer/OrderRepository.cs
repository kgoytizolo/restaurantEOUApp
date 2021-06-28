using System;
using System.Collections.Generic;
using Domains.Entities;
using GenericErrorHandler;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RepositoryLayer.Interface;

namespace RepositoryLayer
{
    public class OrderRepository : IOrdersRepository
    {
        public OrderRepository()
        {
        }

        public async Task<Response<Order>> GetOrdersList(OrderStatus[] orderStatus = null){
            throw new NotImplementedException();
        }
        public async Task<Response<OrderDetails>> GetOrderDetailsInChunks(MenuType[] menuType){
            throw new NotImplementedException();
        }

        public async Task<Response> CreateOrder(OrderDetails[] orderDetails){
            throw new NotImplementedException();
        }

    }
}
