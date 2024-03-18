import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from 'drizzle-orm/libsql/migrator';
import { DB_URL_TENANT, TURSO_AUTH_TOKEN } from '../token';
import * as schema from './schema';


const turso = createClient({
  url: DB_URL_TENANT('parent'),
  authToken: TURSO_AUTH_TOKEN,
});
export const db = drizzle(turso, { schema });
await migrate(db, { migrationsFolder: './tenant/migrations' })
  .then((res) => {
    console.log('MIGRATION SUCCESS: ', res);
  })
  .catch((err) => {
    console.log('ERROR', err);
  });
