import { client } from "@/configs/NilePostgresConfig";

export async function POST(request: Request) {
  await client.connect();
  const {name, email, image} = await request.json();
  const insertCmand = `INSERT INTO USERS VALUES(DEFAULT, '${name}', '${email}', '${image}')`;
//    console.log(insertCmand)     
  const result = await client.query(insertCmand);
// INSERT INTO USERS VALUES (DEFAULT, 'mahadi', 'mahadi.gusion@gmail.com', 'https://example.com/avatar.png');
  await client.end();
  return Response.json(result);
}
