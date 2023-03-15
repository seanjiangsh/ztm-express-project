import { Request, Response } from "express";

import model from "../models/friends.model";

export async function getFriends(req: Request, res: Response) {
  const data = await testAwait();
  return res.json(data);
}

export async function getFriend(req: Request, res: Response) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) return res.json(friend);
  else return res.status(404).json({ error: "Friend does not exist" });
}

export function postFriend(req: Request, res: Response) {
  const { body } = req;
  if (!body.name) return res.status(400).json({ error: "Missing friend name" });

  const newFriend = { id: model.length, name: body.name };
  model.push(newFriend);
  return res.json(newFriend);
}

const testAwait = async () =>
  new Promise((resolve) => setTimeout(() => resolve(model), 100));
