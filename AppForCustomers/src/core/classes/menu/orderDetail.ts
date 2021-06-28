import { Menu } from "./menu";
import { OrderDetailStatus } from "./orderDetailStatus";

export class OrderDetail
{
    constructor(public id: number, 
        public menu: Menu, 
        public orderDetailStatus: OrderDetailStatus,
        public quantity: number)
        {}
}