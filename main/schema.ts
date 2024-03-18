import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const account = sqliteTable('account', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  password: text('password'),
});
