import express from "express";

import * as pageController from "../controllers/page.controller";

const pageRouter = express.Router();

// ! endpoints
pageRouter.get("/", pageController.getPage);

export default pageRouter;
