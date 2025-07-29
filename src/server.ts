import * as http from "http";
import { api }  from "./app";

const port = process.env.PORT;

const server = http.createServer(api);

server.listen(port, () => {
    console.log(`🚀 servidor iniciado na porta http://localhost:${port}`);
});