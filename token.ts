const ORGANIZATION = 'YOUR-ORGANIZATION-NAME';
export const DB_URL = `libsql://main-${ORGANIZATION}.turso.io`;
export const DB_URL_TENANT = (tenant: string) =>
  `libsql://${tenant}-${ORGANIZATION}.turso.io`;

export const TURSO_AUTH_TOKEN = 'YOUR-GROUP-TOKEN';
