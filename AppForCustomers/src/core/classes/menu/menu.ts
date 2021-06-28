import { MenuType } from "./menuType";

export class Menu 
{
    constructor(public id: number, 
        public name: string, 
        public menuType: MenuType,
        public price: number)
        {}
}