import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';


@Injectable()
export class OrderService {

  constructor() { }

  getOrderOld():any {
    return new Order([
      new OrderItem('TA',1,2490),
      new OrderItem('TB',1,4900),
      new OrderItem('TC',2,1450)
    ], new Date("2015-12-04"));
  }

  getAllOrder():Array<Order> {
    return [new Order([
      new OrderItem('TD',1,2490),
      new OrderItem('TE',1,4900),
      new OrderItem('TF',2,1450)
    ], new Date("2015-12-04")),
    
      new Order([
      new OrderItem('TG',1,2490),
      new OrderItem('TH',1,4900),
      new OrderItem('TI',2,1450)
    ], new Date("2015-12-06")),

    ]
  }

  getOrder(id:number):any {
    let all_order = this.getAllOrder();
    for(let i=0; i < all_order.length; i++) {
      if(all_order[i].id == id) {
        return all_order[i];
      }
    }

    return null;
  }
}
