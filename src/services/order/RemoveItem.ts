import { prismaClient } from '../../prisma';

export class RemoveItem {
  async execulte(order_id:string) {
    const removeItem = await prismaClient.item.delete({
      where: {
        id: order_id
      }
    });

    return removeItem;
  }
}