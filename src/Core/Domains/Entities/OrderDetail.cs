using System;

namespace Domains.Entities
{
    public class OrderDetails
    {
        public int Id { get; set; }
        public Menu Menu { get; set; }
        public OrderDetailStatus OrderDetailStatus { get; set; }
        public int Quantity { get; set; }
    }

}