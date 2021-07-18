import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFound = this.usersRepository.findById(user_id);
    if (!userFound || userFound.admin)
      throw new Error('User not found or already admin!');

    const userPatched = this.usersRepository.turnAdmin(userFound);

    return userPatched;
  }
}

export { TurnUserAdminUseCase };
