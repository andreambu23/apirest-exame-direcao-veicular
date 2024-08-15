import { Request, Response } from "express"
import bancoDeDados from "../../bancoDeDados"
import { v4 as uuidv4 } from 'uuid'



export const cadastrar = (req: Request, res: Response) => {
    const {
        examinador,
        candidato,
        quantidade_eliminatorias,
        quantidade_graves,
        quantidade_medias,
        quantidade_leves
    } = (req.body)

    const pontosNegativos: number = Number(quantidade_graves) + Number(quantidade_medias) + Number(quantidade_leves)

    let candidatoAprovado: boolean = false

    if (Number(quantidade_eliminatorias) > 0 || pontosNegativos > 3) {
        candidatoAprovado = true
    }

    const novoExame = ({
        id: uuidv4(),
        examinador,
        candidato,
        quantidadeEliminatorias: Number(quantidade_eliminatorias),
        quantidadeGraves: Number(quantidade_graves),
        quantidadeMedias: Number(quantidade_medias),
        quantidadeLeves: Number(quantidade_leves),
        aprovado: candidatoAprovado
    })

    bancoDeDados.exames.push(novoExame)
    return res.status(201).json(novoExame)


}