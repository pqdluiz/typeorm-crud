import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router = Router();
const user = new UserController();

router.get("/", user.get);
router.post("/", user.post);

export { router };