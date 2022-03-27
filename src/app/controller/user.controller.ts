import { Request, Response } from "express";
import { User } from "../entity/user.entity";

export class UserController {
  async get(
    request: Request<User>,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const data = request.body;
    const user = await User.find(data);

    try {
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json();
    }
  }

  async post(
    request: Request<User>,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const data = request.body;
    const user = User.create(data);
    const result = await User.save(user);

    try {
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json();
    }
  }

  async put(
    request: Request<User>,
    response: Response<User>
  ): Promise<Response<User, Record<string, any>>> {
    const { id } = request.params;
    const user = await User.findOne(id);
    const data = await User.update(user, { id });

    try {
      return response.status(201).json(data);
    } catch (error) {
      return response.status(400).json();
    }
  }

  async delete(
    request: Request<User>,
    response: Response<User>
  ): Promise<Response<User, Record<string, any>>> {
    const { id } = request.params;
    const user = await User.findOne(id);
    const data = await User.remove(user);

    try {
      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json();
    }
  }
}
