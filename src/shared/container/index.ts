
import { container } from 'tsyringe';
import "reflect-metadata";
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';





container.registerSingleton<IUserRepository>("UsersRepository", UsersRepository)
