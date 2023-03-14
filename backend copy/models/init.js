require("dotenv").config();
const { MongoClient } = require("mongodb");
const UsersDAO = require("./UsersDAO");
const PetsDAO = require("./PetsDAO");
const dbClient = process.env.MONGODB_URL;

// const client = new MongoClient(dbClient);

module.exports.initDB = async function initDB() {
  MongoClient.connect(dbClient)
    .then(async (connection) => {
      console.log("succeeded to connect with DB");
      await UsersDAO.injectDB(connection.db(process.env.DB));
      await PetsDAO.injectDB(connection.db(process.env.DB));
    })
    .catch((error) => {
      console.log(`DB connection failed ${error}`);
      process.exit(1);
    });
};

// async function run() {
//   await client.connect();
//   const db = client.db("readyPetGo");
//   //   await db.createCollection("user");
//   const petsCollection = db.collection("pets");

//   //------INSERTAR

//   //   const insertResponse = await petsCollection.insertOne({
      // type: "Dog",
      // name: "Santino",
      // status: "adopted",
      // height: 51,
      // weight: 22,
      // color: "Blonde",
      // Bio: "Goofy and lovely dog",
      // hypoallergenic: "yes",
      // dietaryRestrictions: "no",
      // breed: "none",
//   //   });

//   //-----------BUSCAR

//   //   const results = await petsCollection
//   //     .find({
//   //       // weight: { $gt: 9 },
//   //     })
//   //     .toArray();

//   //   console.log(results);

//   //   await results.forEach((doc) => {
//   //     if (doc.type == "Cat") {
//   //       console.log(doc);
//   //     }
//   //   });

//   //----------BUSCAR SOLO PARTE DE UN STRING

// //   const foundName = await petsCollection
// //     .find({
// //       name: { $regex: /anti/i },
// //     })
// //     .toArray();

//   //----------ACTUALIZAR

//   //   const updateResponse = await petsCollection.updateOne(
//   //     {
//   //       status: {
//   //         $eq: "fostered",
//   //       },
//   //     },
//   //     {
//   //       $set: {
//   //         status: "availiable",
//   //       },
//   //     }
//   //   );

//   //--------ELIMINAR

//   //   const deletePet = await petsCollection.deleteOne({
//   //     status: {
//   //       $eq: "adopted",
//   //     },
//   //   });

//   //   console.log(updateResponse);

// //   console.log(foundName);

//   client.close();
// }

// run();
