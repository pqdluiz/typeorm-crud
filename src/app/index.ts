import "reflect-metadata";
import "dotenv/config";

import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import { router } from "./routes/routes";
import path, { join } from "path";
import { User } from "./entity/User";

const app = express();
const port = 5000;

createConnection({
  type: "sqlite",
  database: "typeorm.db",
  entities: [User],
  synchronize: true,
  logging: false
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Server running to port http://localhost:${port}`);
});
