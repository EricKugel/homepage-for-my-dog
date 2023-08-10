import { authOptions } from "./auth/[...nextauth]";
import Journal from "../../models/journal";
import { connectDB } from "../../helpers/mongohelper";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      try {
        await connectDB();
        const date = Date.now();
        await Journal.create({
          date,
          journal: req.body.data,
        });
        res.status(200).json({ message: "Journal entry created" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Something went wrong" });
      }
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  }
}
