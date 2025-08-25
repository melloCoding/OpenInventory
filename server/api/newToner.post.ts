export default defineEventHandler(async (event) => {  
   const db = useDatabase();

   const body = await readBody<{
      tonerType?: string;
      quantity?: number;
   }>(event);

   if (!body?.tonerType || !body?.quantity) {
    setResponseStatus(event, 400);
    return { error: "tonerType and quantity are required" };
  }

   await db.sql
   `
    CREATE TABLE IF NOT EXISTS toner (
      id TEXT PRIMARY KEY,
      tonerType TEXT,
      quantity integer
    )
  `;

    // Add a new user
   const userId = String(Math.round(Math.random() * 10_000));
   await db.sql`
    INSERT INTO toner (id, tonerType, quantity)
    VALUES (${userId}, ${body.tonerType}, ${body.quantity})
  `;

   // Query for toner
  const { rows } = await db.sql`SELECT * FROM toner WHERE id = ${userId}`;

  return { ok: true, user: rows?.[0] ?? null };

});
