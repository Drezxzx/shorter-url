import { NextResponse } from 'next/server';
import { createClient } from "@libsql/client";

const client = createClient({
  url: "http://127.0.0.1:8080",
});

export async function GET() {
  const sql = await client.execute("SELECT * FROM URL");
  if (sql) {
    console.log(JSON.stringify(sql.rows));
  }
  return NextResponse.json({data: sql.rows });
}

export async function POST(request: NextResponse) {
  const body = await request.json();
  

  const { url } = body;
  const newurl = generateRandomWord(5)
  try {
    const sql = await client.execute(
      `INSERT INTO URL (url, newurl) VALUES ('${url}', 'http://localhost:3000/${newurl}')`
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({msg:"URL already exist"},{status:400})
  }
    
 
    
  
  return NextResponse.json({ msg: "URL added successfully", newurl:`http://localhost:3000/${newurl}` });
}

function generateRandomWord(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export async function DELETE(req : NextResponse) {
  const body = await req.json()
  const {url} = body

  const sql = await client.execute(`DELETE FROM URL WHERE url = '${url}'`);

  return NextResponse.json({msg:"URL deleted successfully"}, {status:200})
}