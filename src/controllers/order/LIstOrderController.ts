import { Request, Response } from 'express';
import { ListOrderService } from '../../services/order/LIstOrderService';

export class ListOrderController {
  async handle(req:Request, res:Response) {
    const listOrder = new ListOrderService();
    const order = await listOrder.execulte();

    return res.json(order);
  }
}