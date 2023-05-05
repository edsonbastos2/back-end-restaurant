import { prismaClient } from '../../prisma';

export class RemoveOrderService {
  async execulte(order_id:string) {

    const order = await prismaClient.order.delete({
      where: {
        id: order_id
      }
    });

    return order;
  }
}