import { faker } from "@faker-js/faker";
import supertest from "supertest";

import { UserController } from "../app/controller/user.controller";

const user = {
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.date.weekday(),
};

const request = new UserController();

describe("UserController", () => {
  test("(GET) Espero o retorno de status 200 e o corpo da requisição", () => {
    const getUser = supertest(request.get).get("/");
    expect(user).toEqual(getUser);
  });

  test("(POST) Espero o retorno de status 201 e o corpo da requisição", () => {
    const { age, firstName, lastName } = user;
    const result = {
      age,
      firstName,
      lastName,
    };

    const getUser = supertest(request.post).post("/");
    expect(result).toEqual(getUser);
  });
});
