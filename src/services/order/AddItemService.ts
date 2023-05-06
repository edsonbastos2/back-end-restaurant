import { prismaClient } from '../../prisma';


interface ItemRequest {
    order_id: string
    product_id: string
    amount: number
}

export class AddItemService {
  async execulte({amount, order_id, product_id}:ItemRequest) {

    const addItemService = await prismaClient.item.create({
      data: {
        amount,
        order_id,
        product_id
      }
    });

    return addItemService;
  }
}