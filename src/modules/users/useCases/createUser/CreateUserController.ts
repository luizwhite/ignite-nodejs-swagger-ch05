import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    if (
      !name ||
      !email ||
      typeof name !== 'string' ||
      typeof email !== 'string'
    ) {
      return response
        .status(400)
        .json({ error: 'name and email are required to create a user!' });
    }

    try {
      const userCreated = this.createUserUseCase.execute({ name, email });

      return response.status(201).json(userCreated);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateUserController };
