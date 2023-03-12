import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename:  './db.sqlite3' ,
    driver: sqlite3.Database
  });
  
  const bookList = await db.all('SELECT * FROM bookList');
  
  console.log('####',bookList);
  res.status(200).json({ data: bookList });
}
