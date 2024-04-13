import {createServer} from "@mswjs/http-middleware";
import {handlers} from "src/mocks/handlers";

const httpServer = createServer(...handlers)

httpServer.listen(9090)