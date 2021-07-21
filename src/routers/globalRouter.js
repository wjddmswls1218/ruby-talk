import {
  testScreen,
  friendsController,
  messageController,
  profileController,
} from "../controllers/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", testScreen);

globalRouter.get("/friends", friendsController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);

export default globalRouter;
