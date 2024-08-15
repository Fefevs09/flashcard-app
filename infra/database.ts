import { createTables } from '@/queries/V1_create-database';
import { type SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const result = await database.getFirstAsync<{ user_version: number | any }>(
    'PRAGMA user_version'
  );

  let currentDbVersion = DATABASE_VERSION;

  if (result !== null && result.user_version !== undefined) {
    currentDbVersion = result.user_version;
  }

  if (currentDbVersion >= DATABASE_VERSION) {
    return; // if currentDbVersion don't change do nothing
  }

  if (currentDbVersion === 0) {
    // struct database here
    await database.execAsync(createTables());
    currentDbVersion = 0;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }

  // update user version
  await database.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
