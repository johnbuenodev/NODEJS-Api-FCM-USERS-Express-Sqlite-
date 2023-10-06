import sqlite3 from 'sqlite3';

import { open } from 'sqlite';

export default async function openDB() {
  return open({
    filename: './database.db', // default doc /tmp/database.db
    driver: sqlite3.Database
  })
}