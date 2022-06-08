import { Router } from 'express';
const routes = Router();

import {
  GetUsers,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from '../controllers/UserController';
import {
  validateCreateUserPayload,
  validateDeleteUserPayload,
  validateUpdateUserPayload,
} from '../middlewares/requestMiddlewares';

routes.get('/', GetUsers);
routes.post('/', validateCreateUserPayload, CreateUser);
routes.patch('/:id', validateUpdateUserPayload, UpdateUser);
routes.delete('/:id', validateDeleteUserPayload, DeleteUser);

export default routes;
