import { Request, Response } from "express";
import db from "../config/db";
import { IUser } from "../dto/user.dto";
import { errorResponse, successResponse } from "../utils/response";

const GetUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.user.findMany({
      orderBy: [{ rank: "asc" }],
    });
    res.json(successResponse(users));
  } catch (error) {
    res.json(errorResponse(error));
  }
};
const CreateUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, rank }: IUser = req.body;
    const { id } = await db.user.create({
      data: {
        firstName,
        lastName,
        rank,
      },
    });
    res.json(successResponse({ id }));
  } catch (error) {
    console.error(error);
    res.status(500).json(errorResponse(error));
  }
};
const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, rank }: IUser = req.body;
    const { id } = req.params;
    const user = await db.user.update({
      data: {
        firstName,
        lastName,
        rank,
        updatedAt: new Date().toISOString(),
      },
      where: {
        id,
      },
    });
    res.json(successResponse(user));
  } catch (error) {
    res.json(errorResponse(error));
  }
};
const DeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.user.delete({
      where: {
        id,
      },
    });
    res.json(successResponse());
  } catch (error) {
    res.json(errorResponse(error));
  }
};

export { GetUsers, CreateUser, UpdateUser, DeleteUser };
