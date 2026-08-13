// src/app.ts
import express from "express";
import cors from "cors";
//import { toNodeHandler } from "better-auth/node";
import { env } from "./config/env.ts";

export const app = express();

// --- CORS (necesario para que el frontend mande cookies de sesión) ---
app.use(
    cors({
        origin: env.FRONTEND_URL,
        credentials: true,
    })
);

// --- Better Auth ---


// --- Middlewares generales ---
app.use(express.json());

// --- Health check ---
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

// --- Rutas de la app (se agregan aquí a medida que crees módulos) ---

