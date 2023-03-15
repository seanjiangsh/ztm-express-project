import { Request, Response } from "express";

export function getMessages(req: Request, res: Response) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  });
}

export function postMessages(req: Request, res: Response) {
  console.log("Updating messages...");
  res.send();
}
