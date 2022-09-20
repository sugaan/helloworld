/*Create a mongoDB instance in local docker*/
var MongoClient = require('mongodb').MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
async function run() {
  for(i=0;i<1001;i++)
  {
    const uri = "mongodb://0.0.0.0:27017";
    const client = new MongoClient(uri);
  try {
    const database = client.db("admin");
    const haiku = database.collection("first");
    const doc = {
      title: "Hello World!!!",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
}
run().catch(console.dir);


