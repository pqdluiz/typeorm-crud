import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router = Router();
const user = new UserController();

router.get("/", user.get);
router.post("/", user.post);
router.put("/:id", user.put);
router.delete("/:id", user.delete);

export { router };