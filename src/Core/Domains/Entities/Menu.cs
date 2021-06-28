using System;

namespace Domains.Entities
{
    public class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }          
        public MenuType MenuType { get; set; } 
        public decimal Price { get; set; } 
    }

}