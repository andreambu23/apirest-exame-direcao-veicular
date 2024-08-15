import { Router } from "express";
import { server } from "./controllers/server";
import { listarAprovados } from "./controllers/aprovados";

const routes = Router()

// GETS
routes.get('/', server)
routes.get('/exames', listarAprovados)

export default routes