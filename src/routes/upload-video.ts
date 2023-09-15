import { FastifyInstance } from "fastify";
import { fastifyMultipart } from "@fastify/multipart";
import path from "node:path";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fieldSize: 1048576 * 25, // 25mb
    },
  });
  app.post("/videos", async () => {});
}
