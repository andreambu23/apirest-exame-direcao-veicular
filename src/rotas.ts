import { Router } from "express";
import { server } from "./controllers/server";
import { listarAprovados } from "./controllers/aprovados";
import { validarCadastro } from "./middlewares/validarCadastroExame";
import { cadastrar } from "./controllers/exames";

const routes = Router()

// GETS
routes.get('/', server)
routes.get('/exames', listarAprovados)

// POSTS
routes.post('/exames', validarCadastro, cadastrar)

export default routes