import { Request, Response } from 'express';
import { validate as isUuid } from 'uuid';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    if (!user_id || !isUuid(user_id))
      return response
        .status(400)
        .json({ error: 'user ID is required! ID must be an uuid!' });

    try {
      const userPatched = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(userPatched);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
