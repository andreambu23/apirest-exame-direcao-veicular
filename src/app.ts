import  Express  from "express";
import 'dotenv/config'
import routes from './rotas'

const server = Express()

server.use(Express.json())
server.use(routes)

server.listen(process.env.PORTA)