import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: Number(process.env.DB_MAX_CLIENTS) || 10,
  idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT) || 30000,
  connectionTimeoutMillis: Number(process.env.DB_CONNECTION_TIMEOUT) || 2000,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  application_name: process.env.DB_APPLICATION_NAME || 'my_app',
  keepAlive: process.env.DB_KEEP_ALIVE === 'true',
  keepAliveInitialDelayMillis: Number(process.env.DB_KEEP_ALIVE_INITIAL_DELAY) || 10000,
  statement_timeout: Number(process.env.DB_STATEMENT_TIMEOUT) || 5000
})

export const db = drizzle(pool)
