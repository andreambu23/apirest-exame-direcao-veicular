import { Request, Response } from "express";

export const server = (req: Request, res: Response) => {
    res.status(200).send({ message: "API de exames de direção." });
}