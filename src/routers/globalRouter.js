import {
  testScreen,
  friendsController,
  messageController,
  profileController,
  mainController,
  loginController,
  sendMessageController,
} from "../controllers/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/friends", friendsController);
globalRouter.get("/message", messageController);
globalRouter.get("/profile", profileController);

globalRouter.post("/login", loginController);
globalRouter.post("/sendMsg", sendMessageController);

export default globalRouter;
