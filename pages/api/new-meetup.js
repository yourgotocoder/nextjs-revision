import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect(
            `mongodb+srv://sudu:keYRing123@mean.r3iag.mongodb.net/meetupsdata?retryWrites=true&w=majority`
        );
        const db = client.db();

        const meetupCollections = db.collection("meetups");

        const insertedDocument = await meetupCollections.insertOne(data);

        client.close();

        res.status(201).json({ message: "Inserted into database" });
    }
}
//
