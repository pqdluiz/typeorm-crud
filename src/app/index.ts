import "reflect-metadata";
import "dotenv/config";

import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import { router } from "./routes/routes";

const app = express();
const port = 5000;

createConnection({
  type: "sqlite",
  database: "gowftech.db",
  entities: [__dirname + "/entity.{js,ts}"],
  synchronize: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Server running to port http://localhost:${port}`);
});
