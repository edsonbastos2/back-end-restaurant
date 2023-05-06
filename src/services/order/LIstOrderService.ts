import { prismaClient } from '../../prisma';

export class ListOrderService {
  async execulte() {
    const listOrderService = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return listOrderService;
  }
}