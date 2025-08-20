import Database from 'better-sqlite3';
export default defineNitroPlugin((nitroApp) => {
    console.log("✔ Started Executing setupScript.ts")
    const Database = require('better-sqlite3');
    const db = new Database('foobar.db', { verbose: console.log });
    console.log("✔ Connected to SQLite database")
})