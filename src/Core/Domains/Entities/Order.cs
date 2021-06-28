using System;
using System.Collections.Generic;

namespace Domains.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public Table Table { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public List<OrderDetails> OrderDetails { get; set; }  
        public decimal Total { get; set; }
    }
}