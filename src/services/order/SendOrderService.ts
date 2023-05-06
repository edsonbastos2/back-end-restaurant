import { prismaClient } from '../../prisma';

export class SendOrderService {
  async execulte(order_id:string) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        draft: false
      }
    });

    return order;
  }
}