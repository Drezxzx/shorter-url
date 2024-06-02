import { createClient } from "@libsql/client";
import { NextRequest, NextResponse } from "next/server";
const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN
  });
  
export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const shortenUrl = url.searchParams.get("url")
    const sql = await client.execute({
        sql: `SELECT url FROM URL WHERE newurl = ?`,
        args: [shortenUrl]
      });
    console.log(sql.rows)
    return  NextResponse.json({url :sql.rows[0].url}, {status : 200});
  }

