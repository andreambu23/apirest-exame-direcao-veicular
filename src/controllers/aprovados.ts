import { Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";

export const listarAprovados = (req: Request, res: Response) => {

    const { aprovado } = req.query

    if (aprovado === undefined) {
        return res.send(bancoDeDados.exames)
    }

    const estaAprovado = aprovado === 'true'

    const aprovados = bancoDeDados.exames.filter((item) => {
        return item.aprovado === estaAprovado

    })
    return res.send(aprovados)

}