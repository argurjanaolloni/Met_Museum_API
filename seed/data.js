import db from "../db/connection.js";
import Museum from "../models/Museum.js"
import museum from "../museumInfo.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Museum.create(museum);
  await db.close();
};

insertData();
