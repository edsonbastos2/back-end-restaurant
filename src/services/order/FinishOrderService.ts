import { prismaClient } from '../../prisma';

export class FinishOrderService {
  async execulte(order_id:string) {
    const finishOrder = await prismaClient.order.update({
      where: {
        id: order_id
      },
      data: {
        status: true
      }
    });

    return finishOrder;
  }
}