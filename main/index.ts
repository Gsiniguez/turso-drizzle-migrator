import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { DB_URL, TURSO_AUTH_TOKEN } from '../token';
import * as schema from './schema';

const turso = createClient({
  url: DB_URL,
  authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso, { schema });
