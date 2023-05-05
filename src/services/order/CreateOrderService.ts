import { prismaClient } from '../../prisma';

interface OrderRequest {
    table: number,
    name: string
}

export class CreateOrderService {
  async execulte({name, table}: OrderRequest) {
    const orderService = await prismaClient.order.create({
      data: {
        table,
        name
      }
    });

    return orderService;
  }
}