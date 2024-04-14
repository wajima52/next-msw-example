import {createMiddleware, createServer} from "@mswjs/http-middleware";
import {handlers} from "@/mocks/handlers";
import express from "express";
import cors from "cors";

const server = express();
server.use(cors())
server.use(express.json())
server.use(createMiddleware(...handlers))

server.listen(9090)