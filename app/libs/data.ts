import { createClient } from "@libsql/client";


const client = createClient({
  url: "http://127.0.0.1:8080"
});


 export  async function fechtData(url : string) {
    console.log(process.env.TURSO_DATABASE_URL);
    
    console.log('Parámetro URL:', url);
    try {
      const data = await fetch(`/api/o?url=${url}`
    )
    
    const res = await data.json()
    console.log(res); 
    return res.url as string
    } catch (error) {
      console.error(error);
    }
}
