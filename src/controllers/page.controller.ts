import express, { Request, Response } from "express";

export function getPage(req: Request, res: Response) {
  res.render("index", { title: "What a view", caption: "Let's go skiing!" });
}

export const pageStaticMiddleware = express.static("public");
