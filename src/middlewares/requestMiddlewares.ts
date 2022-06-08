import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

const validateCreateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    rank: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    const { message } = error.details[0];
    return res.status(422).json(errorResponse(message));
  }

  next();
};

const validateUpdateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    rank: Joi.number().optional(),
  });

  const { error } = schema.validate({ ...req.body, ...req.params });
  if (error) {
    const { message } = error.details[0];
    return res.status(422).json(errorResponse(message));
  }

  next();
};
const validateDeleteUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    const { message } = error.details[0];
    return res.status(422).json(errorResponse(message));
  }

  next();
};

export {
  validateCreateUserPayload,
  validateUpdateUserPayload,
  validateDeleteUserPayload,
};
