import { server } from "./server/Server";

server.listen(process.env.PORT, () => {
    console.log(`App rondando na porta ${process.env.PORT}`)
})