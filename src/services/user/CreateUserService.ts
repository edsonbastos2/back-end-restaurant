import { prismaClient } from '../../prisma';
import { hash } from 'bcryptjs';


interface UserRequest {
    name: string
    email: string
    password: string
}


export class UserService {

  async execute({name, email, password}:UserRequest) {
    const paswwordHash = await hash(password, 8);

    if(!email) {
      throw new Error('O campo e-mail é obrigatório!');
    }


    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    if(emailAlreadyExists) {
      throw new Error('Esse e-mail já foi cadastrado!');
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: paswwordHash
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });


    return user;
  }
}