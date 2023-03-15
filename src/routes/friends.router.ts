import express from "express";

import * as friendsController from "../controllers/friends.controller";

const friendsRouter = express.Router();

// ! middlewares
friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// ! endpoints
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
friendsRouter.post("/", friendsController.postFriend);

export default friendsRouter;
