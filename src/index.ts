import { server } from "./server/Server";
import "colors";

server.listen(3000, () => console.log("Servidor rodando!".bgGreen.black));
