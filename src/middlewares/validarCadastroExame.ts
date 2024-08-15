import { NextFunction, Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";

export const validarCadastro = (req: Request, res: Response, next: NextFunction) => {

    const {
        examinador,
        candidato,
        quantidade_eliminatorias,
        quantidade_graves,
        quantidade_medias,
        quantidade_leves
    } = req.body

    if (!examinador ||
        !candidato ||
        !quantidade_eliminatorias ||
        !quantidade_graves ||
        !quantidade_medias ||
        !quantidade_leves) {
        return res.status(400).json({ mensagem: `Por favor, preencha os campos corretamente.` })
    }

    if (bancoDeDados.exames.find(exame => exame.candidato === candidato)) {
        return res.status(400).json({
            mensagem: `O candidato ${candidato} já tem cadastro no sistema.`
        })
    }

    next()
}