import { Request, Response} from 'express';
import { DetailUserService } from '../services/user/DetailUserService';

export class DetailUserController {
  async handle(req: Request, res:Response) {
    const userService = new DetailUserService();
    const user = await userService.execute();
    return res.json(user);
  }
}
