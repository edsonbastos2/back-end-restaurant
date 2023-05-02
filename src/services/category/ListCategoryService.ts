import { prismaClient } from '../../prisma';

export class ListCategoryService {
  async execulte() {
    const category = prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    });

    return category;
  }
}