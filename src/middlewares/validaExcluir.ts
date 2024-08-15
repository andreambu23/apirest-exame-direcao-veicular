import { NextFunction, Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";

export const validarDelete = (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;

    const indiceExame = bancoDeDados.exames.findIndex((item) => {
        return item.id === id
    })

    if (indiceExame === -1) {
        return res.status(404).json({ mensagem: 'O Identificador informado não existe na base de dados.' })
    }

    next()
}