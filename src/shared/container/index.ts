
import { container } from 'tsyringe';
import "reflect-metadata";
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { INotesRepository } from '../../modules/notes/repositories/INotesRepository';
import { NotesRepository } from '../../modules/notes/typeorm/repositories/NotesRepository';





container.registerSingleton<IUserRepository>("UsersRepository", UsersRepository)
container.registerSingleton<INotesRepository>("NotesRepository", NotesRepository)