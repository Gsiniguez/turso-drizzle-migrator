import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { join } from 'node:path';
import { DB_URL_TENANT, TURSO_AUTH_TOKEN } from '../token';
import * as schema from './schema';

export const tenantDb = (tenant: string) => {
  const turso = createClient({
    url: DB_URL_TENANT(tenant),
    authToken: TURSO_AUTH_TOKEN,
  });

  return drizzle(turso, { schema });
};

export const tenantMigrator = async (tenant: string) => {
  const db = tenantDb(tenant);
  console.log('MIGRATING ', db);
  await migrate(db, {
    migrationsFolder: join(
      process.cwd(),
      '../..',
      'libs/turso/tenant/migrations'
    ),
  });
};
