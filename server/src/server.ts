// src/server.ts
import { app } from "./app.ts";
import { env } from "./config/env.ts";

const server = app.listen(env.PORT, () => {
    console.log(`🚀 Servidor corriendo en ${env.BETTER_AUTH_URL} (${env.NODE_ENV})`);
});

// --- Apagado ordenado ---
function shutdown(signal: string) {
    console.log(`\n${signal} recibido. Cerrando servidor...`);
    server.close(() => {
        console.log("Servidor cerrado correctamente.");
        process.exit(0);
    });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));