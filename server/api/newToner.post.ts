export default defineEventHandler(async (event) => {  
   const db = useDatabase();

   const body = await readBody<{
     tonerType?: string;
      quantity?: string;
      location?: string;
   }>(event);

   if (!body?.tonerType || !body?.quantity || !body?.location) {
    setResponseStatus(event, 400);
    return { error: "tonerType, quantity, and location are required." };
  }

   await db.sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      tonerType TEXT,
      quantity TEXT,
      location TEXT
    )
  `;

    // Add a new user
   const userId = String(Math.round(Math.random() * 10_000));
   await db.sql`
    INSERT INTO users (id, tonerType, quantity, location)
    VALUES (${userId}, ${body.tonerType}, ${body.quantity}, ${body.location})
  `;

   // Query for users
  const { rows } = await db.sql`SELECT * FROM users WHERE id = ${userId}`;
   
  return { ok: true, user: rows?.[0] ?? null };

});
