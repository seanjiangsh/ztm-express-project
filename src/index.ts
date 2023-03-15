import express from "express";
import path from "path";

import { pageStaticMiddleware } from "./controllers/page.controller";

import messagesRouter from "./routes/messages.router";
import friendsRouter from "./routes/friends.router";
import pageRouter from "./routes/page.router";

const app = express();

// ! set Express params
// * add templating engine "hbs"
app.set("view engine", "hbs");
app.set("views", path.resolve("./src/views"));

// ! middlewares
// * logging Method, URL and response time
app.use(async (req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  const logMsg = `${req.method}, ${req.baseUrl}${req.url}, ${res.statusCode}, ${delta}ms`;
  console.log(logMsg);
});
// * register JSON parser
app.use(express.json());
// * register static file folder middleware to page route
app.use("/page", pageStaticMiddleware);

// ! endpoints
app.use("/page", pageRouter);
app.use("/messages", messagesRouter);
app.use("/friends", friendsRouter);

// ! start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
