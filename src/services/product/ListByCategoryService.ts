import { prismaClient } from '../../prisma';


export class ListByCategoryService {
  async execulte(category_id:string) {
    const listByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        banner: true,
        category_id: true
      }
    });

    return listByCategory;
  }
}