import { NextFunction, Request, Response } from "express";
import bancoDeDados from "../../bancoDeDados";

export const validarAtualizacaoCadastro = (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params
    console.log(id, typeof(id));
    
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

    if (!bancoDeDados.exames.find(item => item.id === id)) {
        return res.status(400).json({
            mensagem: 'O Identificador informado não existe na base de dados.'
        })
    }

    next()
}