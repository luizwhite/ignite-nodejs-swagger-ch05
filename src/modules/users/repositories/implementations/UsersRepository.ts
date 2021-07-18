import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let userNew = new User();
    userNew = { ...userNew, name, email };

    this.users.push(userNew);

    return userNew;
  }

  findById(id: string): User | undefined {
    const userFound = this.users.find(({ id: uId }) => id === uId);

    return userFound;
  }

  findByEmail(email: string): User | undefined {
    const userFound = this.users.find(({ email: uEmail }) => email === uEmail);

    return userFound;
  }

  turnAdmin(receivedUser: User): User {
    const userPatchedIndex = this.users.indexOf(receivedUser);

    this.users[userPatchedIndex].admin = true;
    this.users[userPatchedIndex].updated_at = new Date();

    return this.users[userPatchedIndex];
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
