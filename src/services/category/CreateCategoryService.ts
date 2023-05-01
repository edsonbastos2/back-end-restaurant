import { prismaClient } from '../../prisma';

export class CreateCategoryService {
  async execulte(name: string) {
    const category = await prismaClient.category.create({
      data: {
        name
      },
      select: {
        id: true,
        name: true
      }
    });
    return category;
  }
}