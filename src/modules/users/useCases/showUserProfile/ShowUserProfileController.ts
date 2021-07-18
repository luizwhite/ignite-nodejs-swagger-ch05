import { Request, Response } from 'express';
import { validate as isUuid } from 'uuid';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    if (!user_id || !isUuid(user_id))
      return response
        .status(400)
        .json({ error: 'user ID is required! ID must be an uuid!' });

    try {
      const userFound = this.showUserProfileUseCase.execute({ user_id });

      return response.json(userFound);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
