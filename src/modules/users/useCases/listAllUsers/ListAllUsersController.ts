import { Request, Response } from 'express';
import { validate as isUuid } from 'uuid';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    if (!user_id || typeof user_id !== 'string' || !isUuid(user_id))
      return response
        .status(400)
        .json({ error: 'user ID is required! ID must be an uuid!' });

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.json(allUsers);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
