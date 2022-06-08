import { Router } from 'express';
const routes = Router();

import UserRoutes from './user.routes'

routes.use('/users', UserRoutes)

export default routes;