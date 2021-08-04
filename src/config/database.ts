import { Pool } from "pg";

export const pool: Pool = new Pool({
    user: "django",
    password: "password1",
    host: "localhost",
    port: 5432,
    database: "rquery1"
});




