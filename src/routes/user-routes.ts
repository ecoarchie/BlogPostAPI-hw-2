import { Router } from 'express';
import {
  createNewAdminController,
  createNewUserController,
  deleteUserByIdController,
  getAllUsersController,
} from '../controllers/user-controllers';
import { basicAuthMiddleware } from '../middlewares/basic-auth-middleware';
import {
  inputValidatiomMiddleware,
  userBodyValidation,
} from '../middlewares/input-validation-middleware';

export const userRouter = Router();

userRouter.get('/', basicAuthMiddleware, inputValidatiomMiddleware, getAllUsersController);

userRouter.post(
  '/',
  basicAuthMiddleware,
  userBodyValidation(),
  inputValidatiomMiddleware,
  createNewAdminController
);

userRouter.delete('/:id', basicAuthMiddleware, inputValidatiomMiddleware, deleteUserByIdController);
