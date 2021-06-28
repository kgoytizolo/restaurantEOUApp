import { OrderStatus } from "./orderStatus";
import { OrderDetail } from "./orderDetail";
import { Table } from "./table";

export class Order 
{
    constructor(public id: number, 
        public table: Table, 
        public orderStatus: OrderStatus,
        public orderDetails: Array<OrderDetail>,
        public total: number)
        {}
}