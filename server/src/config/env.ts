
// src/config/env.ts
// Las variables ya están cargadas por Node gracias al flag --env-file=.env
// (ver script "dev" y "start" en package.json). Aquí solo las centralizamos
// y validamos que existan las obligatorias.

function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Falta la variable de entorno requerida: ${key}`);
    }
    return value;
}

export const env = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3005,
    NODE_ENV: process.env.NODE_ENV ?? "development",

    DATABASE_URL: required("DATABASE_URL"),
    BETTER_AUTH_SECRET: required("BETTER_AUTH_SECRET"),
    BETTER_AUTH_URL: required("BETTER_AUTH_URL"),

    FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:5173",
};