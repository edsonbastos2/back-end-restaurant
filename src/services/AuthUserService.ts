import { prismaClient } from '../prisma';
import { compare  } from 'bcryptjs';

interface AuthRequest {
    email:string
    password: string
}

export class AuthUserService {
  async execute({email, password}:AuthRequest) {

    const user = await prismaClient.user.findFirst({
      where: {
        email:email
      }
    });

        
    if(!user) {
      throw new Error('email ou senha incorreto!');
    }

    const passwordhash = await compare(password, user?.password);

    if(!passwordhash) {
      throw new Error('email ou senha incorreto!');
    }

    return {ok: true};
  }
}