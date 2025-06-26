/** drizzle config */
import 'dotenv/config';
import type { Config } from 'drizzle-kit';



import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/lib/db/schema',
  out: './drizzle/migrations',
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!
  },
  verbose: true,
  strict: true,
} satisfies Config;

