using System;

namespace Domains.Entities
{
    public enum OrderStatus
    {
        RequestedByClient,
        InPreparation, 
        ReadyToPickUp,
        DeliveredToClient,
        Paid,
        Cancelled
    }
}
