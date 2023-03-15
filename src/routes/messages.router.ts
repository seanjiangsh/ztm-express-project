import express from "express";

import * as messagesController from "../controllers/messages.controller";

const messagesRouter = express.Router();

// ! endpoints
messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

export default messagesRouter;
