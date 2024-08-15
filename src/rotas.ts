import { Router } from "express";
import { server } from "./controllers/server";

const routes = Router()

// GETS
routes.get('/', server)

export default routes