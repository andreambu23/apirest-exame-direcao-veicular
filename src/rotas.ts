import { Router } from "express";
import { server } from "./controllers/server";
import { listarAprovados } from "./controllers/aprovados";
import { validarCadastro } from "./middlewares/validarCadastroExame";
import { atualizar, cadastrar, deletar } from "./controllers/exames";
import { validarAtualizacaoCadastro } from "./middlewares/validarAtualizacaoCadastro";
import { validarDelete } from "./middlewares/validaExcluir";

const routes = Router()

// GETS
routes.get('/', server)
routes.get('/exames', listarAprovados)

// POSTS
routes.post('/exames', validarCadastro, cadastrar)

// PUTS
routes.put('/exames/:id', validarAtualizacaoCadastro, atualizar)

// DELETES
routes.delete('/exames/:id', validarDelete, deletar)

export default routes