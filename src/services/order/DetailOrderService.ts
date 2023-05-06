import { prismaClient } from '../../prisma';

export class DetailOrderService {
  async execulte(order_id:string) {
    const detailOrder = await prismaClient.item.findMany({
      where: {
        order_id: order_id
      },
      include:{
        product: true,
        order: true
      }
    });

    return detailOrder;
  }
}