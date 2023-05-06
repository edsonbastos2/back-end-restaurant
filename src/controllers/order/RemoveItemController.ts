import { Request, Response} from 'express';
import { RemoveItem } from '../../services/order/RemoveItem';

export class RemoveItemController {
  async handle(req:Request, res:Response) {
    const order_id = req.query.order_id as string;
    const removeItem = new RemoveItem();
    const item = await removeItem.execulte(order_id);

    return res.json(item);
  }
}