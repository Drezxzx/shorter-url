import { NextRequest, NextResponse } from 'next/server';
import { createClient } from "@libsql/client";
import { NextApiRequest } from 'next';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { url } = body;
  const newurl = generateRandomWord(5)
  try {
    const sql = await client.execute(
      `INSERT INTO URL (url, newurl) VALUES ('${url}', '${newurl}')`
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({msg:"Esta URL ya esta en nuestra base de datos"},{status:400})
  }
  return NextResponse.json({ msg: "URL added successfully", newurl:`https://d-orcin-nine.vercel.app/${newurl}` });
}

function generateRandomWord(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export async function DELETE(req : NextRequest) {
  const body = await req.json()
  const {url} = body

  const sql = await client.execute(`DELETE FROM URL WHERE url = '${url}'`);

  return NextResponse.json({msg:"URL deleted successfully"}, {status:200})
}