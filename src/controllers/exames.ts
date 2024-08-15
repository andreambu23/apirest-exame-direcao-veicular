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

export const atualizar = (req: Request, res: Response) => {

    const { id } = req.params
    const {
        examinador,
        candidato,
        quantidade_eliminatorias,
        quantidade_graves,
        quantidade_medias,
        quantidade_leves
    } = req.body

    const exame = bancoDeDados.exames.find((item) => {
        return item.id === id
    })

    if (!exame) {
        return res.status(204).send()
    }

    exame.examinador = examinador
    exame.candidato = candidato
    exame.quantidadeEliminatorias = quantidade_eliminatorias
    exame.quantidadeGraves = quantidade_graves
    exame.quantidadeMedias = quantidade_medias
    exame.quantidadeLeves = quantidade_leves

    return res.status(204).send()
}