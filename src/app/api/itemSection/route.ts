import dbConnect from "../../../../lib/mongodb";
import Contact from "../../../../lib/models/CartModel";

export async function POST(req: Request) {
  await dbConnect();
  const data = await req.json();
  const newItem = new Contact(data);
  await newItem.save();
  return new Response(JSON.stringify(newItem), { status: 201 });
}

export async function GET() {
  await dbConnect();
  const items = await Contact.find({});
  return new Response(JSON.stringify(items), { status: 200 });
}