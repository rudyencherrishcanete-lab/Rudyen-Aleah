import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("labdb");
    const products = await db.collection("items").find({}).toArray();
    res.status(200).json(JSON.parse(JSON.stringify(products)));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
