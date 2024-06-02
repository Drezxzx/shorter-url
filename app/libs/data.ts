import { createClient } from "@libsql/client";


const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
});


 export  async function fechtData(url : string) {
  try {
    console.log(process.env.TURSO_DATABASE_URL);
    
    console.log('Parámetro URL:', url);

    // const sql = await client.execute({
    //   sql: `SELECT url FROM URL WHERE newurl = ?`,
    //   args: [url]
    // });
    return "hola"
    console.log('Resultado de la consulta:', sql.rows);
    return sql.rows[0].url as string
      
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
    throw new Error('Error al ejecutar la consulta');
  }
}
