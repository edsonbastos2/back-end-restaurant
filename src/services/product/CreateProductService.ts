import { prismaClient } from '../../prisma';

interface Product {
    name: string,
    price: string,
    banner: string,
    description: string,
    category_id: string
}
export class CreateProductService {
  async execulte({name, price, banner, description, category_id}: Product) {

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        banner,
        description,
        category_id
      }
    });
    return product;
  }
}