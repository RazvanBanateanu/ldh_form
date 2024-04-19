import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const ans1 = searchParams.get('ans1');
  const ans2 = searchParams.get('ans2');
  const ans3 = searchParams.get('ans3');
 
  try {
    if (!name || !category) throw new Error('All fields are required');
    await sql`INSERT INTO Answers (Name, Category, Ans1, Ans2, Ans3) VALUES (${name}, ${category},  ${ans1},  ${ans2},  ${ans3});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const answers = await sql`SELECT * FROM Answers;`;
  return NextResponse.json({ answers }, { status: 200 });
}

// http://localhost:3000/api/add-answers?name=BanateanuRazvan&category=health&ans1=Good&ans2=Bad&ans3=Ok